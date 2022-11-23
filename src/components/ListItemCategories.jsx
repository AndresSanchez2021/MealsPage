import React from 'react'
import { ItemCard } from './ItemCard'
import { LoadingComponent } from './LoadingComponent'

export const ListItemCategories = ({listCategories}) => {
    
    const RenderListItems=()=>listCategories.map(item=>
                            <ItemCard  
                                key={item.idCategory}
                                id={item.idCategory} 
                                category={item.strCategory} 
                                thumb ={item.strCategoryThumb} 
                                description ={item.strCategoryDescription}
                                />
                            )


    if (ListItemCategories==null) 
        return <LoadingComponent/>

    return (
        <ul className='col-lg-3 col-sm-4 col-12 flexCategories'>
            <h5 className='titleList'>Categorias</h5>
            <RenderListItems />
        </ul>
        
    )
}
