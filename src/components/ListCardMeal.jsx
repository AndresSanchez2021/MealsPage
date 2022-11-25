import React from 'react'
import { CardMeal } from './CardMeal'
import { CardCategory } from './CardCategory';
import { LoadingComponent } from './LoadingComponent';
import { ItemCard } from './ItemCard';

export const ListCardMeal = ({data=[], category=false}) => {

    const ListMeal=()=>data.map(item => 
        <CardMeal key={item.idMeal}
            idMeal ={item.idMeal}
            strMeal = {item.strMeal}
            strCategory =  {item.strCategory}
            strArea =  {item.strArea}
            strIngredient1 = {item.strIngredient1}
            strIngredient2 = {item.strIngredient2}
            strIngredient3 = {item.strIngredient3}
            strIngredient4 = {item.strIngredient4}
            strInstructions = {item.strInstructions}
            strMealThumb = {item.strMealThumb}
    />)

    const ListMealsCategory=()=>data.meals.map(item => 
        <CardMeal 
        idMeal ={item.idMeal}
        strMeal = {item.strMeal}
        strMealThumb = {item.strMealThumb}
    />)

    const RenderList=()=>{
       return category
        ? <ListMealsCategory/>
        :<ListMeal/>
    }
         
    
    
    if(data == []){
        return <div>
            <LoadingComponent/>
        </div>

    }
    return (
        <ul className='col-lg-9 col-12 col-sm-8 text-center'>
            <h3 className='titleList'>Recetas</h3>
            <RenderList/>
            
        </ul>
    )
           
      

  
}
