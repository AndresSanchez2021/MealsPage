import React, { useEffect, useState } from 'react'
import { LoadingComponent } from '../components/LoadingComponent'
import {
  Outlet,
  Link,
  useLoaderData,
  useParams
} from "react-router-dom";
import axios from 'axios';
import { ListItemCategories } from '../components/ListItemCategories';

export const Receta = (  ) => { 

    const a =useParams();
    const url='https://www.themealdb.com/api/json/v1/1/lookup.php?i='

    const [details, setDetails] = useState(null)

    const loadData=()=>{
      axios.get(url+a.id).then((response)=>{
        setDetails(response.data)
      })        
    }

    useEffect(() => {
      loadData()

    }, [])

    if(details===null)
      return (
        <LoadingComponent/>
      )
      
    
    console.log('details.meals :', details.meals[0]);
     
    return (
      <div className="row">
        <div className='col-lg-12 col-sm-4 col-12 flexCategories'>
        <img className="img-fluid text-center" src={details.meals[0].strMealThumb} alt="Card image cap"/>
          <div className='card-body'>
            <h6 className="card-title  colorPrincipal">{details.meals[0].strMeal}</h6>
            <p className="card-text text text-wrap">{details.meals[0].strInstructions}</p>

            <span className="card-text text">{}</span>
            <span className="card-text text">{}</span>

            <p className="card-text text-short">{details.meals[0].strIngredient1}</p>
            <p className="card-text text-short">{details.meals[0].strIngredient2}</p>
            <p className="card-text text-short">{details.meals[0].strIngredient3}</p>
            <p className="card-text text-short">{details.meals[0].strIngredient4}</p> 

            
          </div>
        </div>
        
      </div>
    ) 
}
