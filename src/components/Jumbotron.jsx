import React from 'react'
import '../styles/jumbotron.css'

export const Jumbotron = () => {
  return (
       
                       
                            <div className="carousel-item active">
                                <div id="opacity_div"></div>
                                    <div className="overlay-image">
                                        <div className="d-flex justify-content-center"><img className='picture-jumbotron' src="https://www.recetasnestle.com.co/sites/default/files/2021-11/Recetas_Banner_pericada-platos-ti%CC%81picos-regio%CC%81n-Orinoqui%CC%81a_1200x384.jpg" alt="" /></div>
                                    </div>
                                    <div className="carousel-caption d-none d-md-block">
                                            <h1>"People who loves to eat are always Best People""</h1>
                                            <h5>Julia Child</h5>
                                    </div>
                            </div>
       
  )
}


