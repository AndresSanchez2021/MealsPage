import React from 'react'
import { ListCardMeal } from '../components/ListCardMeal'
import { ListItemCategories } from '../components/ListItemCategories'

export const PrincipalPage = ({data, listCategories}) => {
  return (
    <div className='row rowR'>
      <ListCardMeal data ={data}/>
      <ListItemCategories  listCategories={listCategories}/>
    </div>
  )
}
