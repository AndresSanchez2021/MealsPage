import React from 'react'
import { Link, useParams } from 'react-router-dom';
import '../styles/itemCard.css'


export const ItemCard = ({id,category="",thumb,description="" ,flag=false}) => {
    description.split("");
    description = description.length >=100 ? description.slice(0,40):description;

    
    flag ? console.log(' itemCardid:',id,category,thumb,description ) :<></>

    const RenderItemCard = ()=>(
        <li className="card cardItem" key={id} id={id}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-title">
                                <p className='card-title text-nowrap '>{category}</p>
                                <span className='d-none d-sm-block  d-block d-md-block d-lg-block description'>{description}  ...</span>

                            </div>
                        </div>
                        <div className="col-sm-12 col-12 col-lg-6 d-flex ">
                                <div className="card-title">
                                    <img className='img-fluid' src={thumb} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </li>
    )

    
    
  return (
        <Link className='no-nav-link' to={`/category/${category}`} id={id} key={id} >
            <RenderItemCard/>
        </Link>   
        
        
  )
}
