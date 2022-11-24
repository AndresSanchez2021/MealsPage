import React from 'react'
import { Link} from "react-router-dom";


export const CardMeal = ({
    idMeal="", 
    strMeal="", 
    strCategory="",
    strArea="",
    strIngredient1="",
    strIngredient2="",
    strIngredient3="",
    strIngredient4="",
    strInstructions="",
    strMealThumb=""
    }) => {
      strInstructions.split("");
      strInstructions = strInstructions.length >=100 ? strInstructions.slice(0,100):strInstructions;
      

    const RenderCardMeal=()=>(
      <li className='card col-5 col-lg-3 cardMeal no-nav-link'  id={idMeal} key={idMeal}>
        <img className="card-img-top" src={strMealThumb} alt="Card image cap"/>
        <div className='card-body no-nav-link'>
          <h6 className="card-title  colorPrincipal">{strMeal}</h6>
          <p className="card-text text">{strInstructions}</p>

          <span className="card-text text">{}</span>
          <span className="card-text text">{}</span>

          <p className="card-text text-short">{strIngredient1}</p>
          <p className="card-text text-short">{strIngredient2}</p>
          <p className="card-text text-short">{strIngredient3}</p>
          <p className="card-text text-short">{strIngredient4}</p> 

          
        </div>
      </li>
    )
  
  return (
      
        <Link className='no-nav-link' key={idMeal} id={idMeal} to={`/Receta/${idMeal}`}
        >
          <RenderCardMeal/>
        </Link>
      
    )
  }