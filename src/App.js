import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const[index, setIndex] = useState(0);

useEffect(()=>{
const lastIndex = people.length -1;
if (index<0){
  setIndex(lastIndex);
} else
if(index> lastIndex){
  setIndex(0)
}

}, [index, people])

useEffect(()=>{

let slider= setInterval(()=>{
setIndex(index +1)
}, 3000);
return () => clearInterval(slider) //this is a cleanup function
}, [index])

//   const checkNumber = (number) =>{
//     if(number > people.length -1){
//       return 0 //if we are at the last item, lets go to the first item
//     }
//     if(number < 0){
//       return people.length-1 //if we get to the first item, lets go back to the last
//     }
//     return number // else return number
//   }

//   const next =()=>{
//   setIndex((index)=>{
//     let newIndex = index +1;
//     return checkNumber(newIndex)
//   })
// }

  return <section className='section'>
    <div className='title'>
      <h2> <span>/</span>Reviews</h2>
    </div>
    <div className='section-center'>
      {people.map((person, personIndex)=>{
        
        const {id, name, image, title, quote} = person
        let position = 'nextSlide'
        if(personIndex === index){
          position = 'activeSlide'
        }
        if(personIndex=== index - 1 || 
          (index === 0 && personIndex === people.length - 1)){
          position = 'lastSlide'
        }

        return <article className={position} key={id}>
          <img src={image} alt ={name} className='person-img'></img>
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })}
      <button className='prev' onClick={()=> setIndex(index -1)}><FiChevronLeft /></button>
      <button className='next' onClick={()=> setIndex(index +1)}><FiChevronRight /></button>
    </div>
  </section>

}

export default App;
