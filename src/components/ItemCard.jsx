import React from 'react'
import '../styles/itemCard.css'

export const ItemCard = ({id,category,thumb,description}) => {
    description.split("");
    description = description.length >=100 ? description.slice(0,40):description;
    
  return (
    
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
}
