import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Dessert() {
    const[meals,setMeals] = useState([]);
    let cat="starter";
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        .then((response)=>response.json())
        .then((data)=>setMeals(data.meals));
    },[]);
  return (
    <div className="conatiner">
    <div className='row'>
        
           {meals.map((meal) => {
            return (
                <Card 
                title={meal.strMeal} 
                url={meal.strMealThumb} 
                id={meal.idMeal} />
            );
           })}
        
     
    </div>
    </div>
  );
}
