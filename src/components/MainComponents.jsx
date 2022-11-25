import { NavBarComponent } from './NavBarComponent';
import { useEffect, useState } from 'react';
import { LoadingComponent } from './LoadingComponent';
import {Receta} from '../pages/Receta'
import { Jumbotron } from './Jumbotron';
import {BrowserRouter as Router,Routes, Route,  Link} from "react-router-dom";
import { ListItemCategories } from './ListItemCategories';
import { FooterComponent } from './FooterComponent';
import { Categoty } from '../pages/Categoty';
import { ListCardMeal } from './ListCardMeal';
import { useLoadData } from '../hooks/useLoadData';
import { addToMeals } from '../redux/actionsCreator';
import { connect } from 'react-redux';




const MainComponents=({getAllData})=> {

  const urlBase ='https://www.themealdb.com/api/json/v1/1'
  const urlCategories='/categories.php'
  const urlDetailsMeal= '/search.php?f=b'

  const [categories, setCategories] = useLoadData(urlBase+urlCategories)
  const [meals, setMeals] = useLoadData(urlBase+urlDetailsMeal)

  
  
  useEffect(() => {
    setCategories()
    setMeals()
    getAllData()
  }, [])
  


  
  const RenderMain=()=>(
    <>
        <NavBarComponent/>
        <Jumbotron/>

        <div className="container">
          <div className="row rowR">
              <Routes>
                  
                  <Route index element={<ListCardMeal data ={meals.meals}/>   } />
                  <Route path="/home" element={<ListCardMeal data ={meals.meals}/>   } />
                  <Route path="/receta/:id" element={<Receta/>} />
                  <Route path="/category/:category" element={<Categoty/>} />
              
              </Routes>
              <ListItemCategories  listCategories={categories.categories}/>
          </div>
        </div>
        <FooterComponent/>
        


      </>
  )
  
  return (
    categories == "" 
    ? <LoadingComponent/>
    : <RenderMain/> 
  );
}

const mapStateToProps=()=>{""}
const mapDispatchToProps=dispatch=>({
  getAllData(){
    dispatch(addToMeals())
  }
})

export default   connect(mapStateToProps, mapDispatchToProps)(MainComponents)

    