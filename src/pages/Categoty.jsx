import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardMeal } from '../components/CardMeal';
import { ListCardMeal } from '../components/ListCardMeal';
import { LoadingComponent } from '../components/LoadingComponent';

export const Categoty = () => {

    
    const a =useParams();


    const url='https://www.themealdb.com/api/json/v1/1/filter.php?c='

    const [category, setCategory] = useState(null)

    const loadData=()=>{
      axios.get(url+a.category).then((response)=>{
        setCategory(response.data)
      })        
    }

    useEffect(() => {
      loadData()

    }, [])

   


  return (
    category == null
    ? <LoadingComponent/>
    : <ListCardMeal  data={category} category /> 
  )
}
