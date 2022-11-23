import React from 'react'
import { CardMeal } from './CardMeal'
import { LoadingComponent } from './LoadingComponent';

export const ListCardMeal = ({data=[]}) => {
console.log('data :', data);
    

    const RenderListMeal=()=>data.map(item => 
            <CardMeal 
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
            />
            
        ) 
    
    
    if(data == []){
        return <div>
            <LoadingComponent/>
        </div>

    }
    return (
        <ul className='col-lg-9 col-12 col-sm-8 text-center'>
            <h3 className='titleList'>Recetas</h3>
            <RenderListMeal/>
            
        </ul>
    )
           
      

  
}
