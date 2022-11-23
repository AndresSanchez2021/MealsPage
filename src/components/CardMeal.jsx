import React from 'react'
import { Link} from "react-router-dom";
  

export const CardMeal = ({
    idMeal, 
    strMeal, 
    strCategory,
    strArea,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strInstructions,
    strMealThumb
    }) => {
      strInstructions.split("");
      strInstructions = strInstructions.length >=100 ? strInstructions.slice(0,100):strInstructions;
      

    const RenderCardMeal=()=>(
      <li className='card col-5 col-lg-3 cardMeal no-nav-link'  id={idMeal} key={idMeal}>
        <img class="card-img-top" src={strMealThumb} alt="Card image cap"/>
        <div className='card-body no-nav-link'>
          <h6 class="card-title  colorPrincipal">{strMeal}</h6>
          <p class="card-text text">{strInstructions}</p>

          <span class="card-text text">{}</span>
          <span class="card-text text">{}</span>

          <p class="card-text text-short">{strIngredient1}</p>
          <p class="card-text text-short">{strIngredient2}</p>
          <p class="card-text text-short">{strIngredient3}</p>
          <p class="card-text text-short">{strIngredient4}</p> 

          
        </div>
      </li>
    )
  
  return (
      
        <Link className='no-nav-link'to={`/Receta/${idMeal}`}
        >
          <RenderCardMeal/>
        </Link>
      
    )
  }