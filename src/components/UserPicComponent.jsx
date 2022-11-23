import React from 'react'
import '../styles/userPicComponent.css'

export const UserPicComponent = ({urlPhoto=''}) => {
    if(urlPhoto ==''){
        return(
            <div className="user-circle">
                <i className="fa fa-lg fa-user-o"></i>
            </div>
            )
    }else{
        
        return (
            <div className="user-circle">
            <img className='img-fluid circle' src={urlPhoto} alt="" />
        </div>
    )
    }
}
