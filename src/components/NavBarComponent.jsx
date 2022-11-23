import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navBar.css'
import { UserPicComponent } from './UserPicComponent';


export const NavBarComponent = ({photo=""}) => {

    

  return (
    
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Kuks Fresh</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-navbar" id="navbarNav">
                    <ul className="navbar-nav ">
                        <Link to="/home" >
                            <li className="nav-item .effectTransition">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>  
                        <Link to="/" >
                            <li className="nav-item .effectTransition">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                        </Link>  
                        <Link to="/" >
                            <li className="nav-item .effectTransition">
                            <a className="nav-link" href="#">Videos</a>
                            </li>                    
                        </Link>
                    </ul>
                    
                    <UserPicComponent urlPhoto={photo}/>
                    
                </div>
            </div>
        </nav>
    
  )
}
