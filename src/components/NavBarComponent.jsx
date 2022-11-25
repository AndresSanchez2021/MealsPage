import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navBar.css'
import { UserPicComponent } from './UserPicComponent';


export const NavBarComponent = ({photo=""}) => {

    

  return (
    
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand no-nav-link" to="/home">Kuks Fresh</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-navbar" id="navbarNav">
                    <ul className="navbar-nav ">
                        <Link className='no-nav-link'  to="/home" >
                            <li className="nav-item .effectTransition">
                                <span className="nav-link active" aria-current="page" href="#">Home</span>
                            </li>
                        </Link>  
                        <Link className='no-nav-link' to="/" >
                            <li className="nav-item .effectTransition">
                                <span className="nav-link disabled" href="#">Nosotros</span>
                            </li>
                        </Link>  
                        <Link className='no-nav-link'  to="/" >
                            <li className="nav-item .effectTransition">
                            <span className="nav-link disabled" href="#">Videos</span>
                            </li>                    
                        </Link>
                    </ul>
                    
                    <UserPicComponent urlPhoto={photo}/>
                    
                </div>
            </div>
        </nav>
    
  )
}
