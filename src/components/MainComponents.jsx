import { NavBarComponent } from './NavBarComponent';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { LoadingComponent } from './LoadingComponent';
import {Receta} from '../pages/Receta'
import { Jumbotron } from './Jumbotron';
import {BrowserRouter as Router,Routes, Route,  Link} from "react-router-dom";
import { ListItemCategories } from './ListItemCategories';
import { FooterComponent } from './FooterComponent';
import { Categoty } from '../pages/Categoty';
import { ListCardMeal } from './ListCardMeal';




export const MainComponents=()=> {

  const urlBase ='https://www.themealdb.com/api/json/v1/1'
  const urlCategories='/categories.php'
  const urlFilterCategories='/filter.php?c='
  const urlFullDetails='/lookup.php?i='
  const urlAllMeals = '/list.php?i=list'
  const urlDetailsMeal= '/search.php?f=b'


  const photo ='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'

  const [categories, setCategories] = useState("")
  const [mealss, setMealss] = useState("")
  


  const loadData=()=>{
    axios.get(urlBase+urlCategories).then((response)=>{
      setCategories(response.data)
    })
    
    axios.get(urlBase+urlDetailsMeal).then((response)=>{
      setMealss(response.data)
    })
      
  }


  useEffect(() => {
    loadData()

  }, [])
  
  
  return (
    categories == "" 
    ? <LoadingComponent/>
    :  (
      <>
        <NavBarComponent photo={photo}/>
        <Jumbotron/>

        <div className="container">
          <div className="row rowR">
              <Routes>
                  
                  <Route path="/home" element={<ListCardMeal data ={mealss.meals}/>   } />
                  <Route path="/receta/:id" element={<Receta/>} />
                  <Route path="/category/:category" element={<Categoty/>} />
              
              </Routes>
              <ListItemCategories  listCategories={categories.categories}/>
          </div>
        </div>
        <FooterComponent/>
        


      </>
    )   
  );
}



    