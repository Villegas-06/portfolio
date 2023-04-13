import React, { Component } from 'react'
import '../styles/Portafolio.css'
import tienda from '../images/tienda-geek.png'
import portafolio from '../images/portafolio.png' 
import geekconf from '../images/perfilgeek.png'
export class Portafolio extends Component {
    render() {
        return (
            <section className="container mt-5">
                <div  id="portafolio" className="row">
                    <div className="col-md-12">
                        <h2 className="section-title">
                            Mis Proyectos
                        </h2>
                        <div className="portafolio-cards portafolio_txt d-flex justify-content-center">
                        <div className="row project-card ">
                            <div className="col-md-6 col-lg-5 justify-content-center mt-3 mb-3 project-card__img">
                                <img className="project-card__img" src={tienda} alt=""/>
                            </div>
                            <div className="col-md-6 col-lg-5 project-card__info">
                                <br/>
                                <h3 className="project-card__title">
                                    Tienda Geek
                                </h3>
                                <p className="project-card__info">
                                Realizamos una tienda de zapatos, propuesta por nuestro docente John Faber Florez,
                                para evidenciar  trabajo en equipo, manejo de herramientas para la interacción
                                en el laboral, de como es el trabajo, del ambiente. 
                                estuvimos bajo el apoyo del profesor David Rodriguez, que nos asesoró 
                                y estuvo al tanto de nosotros
                                </p>
                                <p className="project-card-stack">
                                    Habilidades usadas:
                                </p>
                                <br/>
                                <div className="container">
                                <ul className="tags ul">
                                    <li className="li">HTML5</li>
                                    <li className="li">CSS3</li>
                                    <li className="li">BOOTSTRAP</li>
                                    <li className="li">JavaScript</li>
                                    <li className="li">SCRUM</li>
                                    <li className="li">GIT</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <div className="portafolio-cards portafolio_txt">
                        <div className="row project-card ">
                            <div className="col-md-6 col-lg-5 justify-content-center mt-3 mb-3 project-card__img">
                                <img className="project-card__img" src={portafolio} alt=""/>
                            </div>
                            <div className="col-md-6 col-lg-5 project-card__info">
                                <br/>
                                <h3 className="project-card__title">
                                    Portafolio
                                </h3>
                                <p className="project-card__info">
                                Realizamos un Portafolio, para evindeciar los procesos que hemos llevado
                                durante el curso, además, para que nosotros, los integrantes de Academia Geek
                                podamos tener un acercamiento a las empresas aliadas, para una fácil vinculación laboral
                                </p>
                                <p className="project-card-stack">
                                    Habilidades usadas:
                                </p>
                                <br/>
                                <div className="container">
                                <ul className="tags ul">
                                    <li className="li">HTML5</li>
                                    <li className="li">CSS3</li>
                                    <li className="li">BOOTSTRAP</li>
                                    <li className="li">JavaScript</li>
                                    <li className="li">GIT</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div className="portafolio-cards portafolio_txt">
                        <div className="row project-card ">
                            <div className="col-md-6 col-lg-5 justify-content-center mt-3 mb-3 project-card__img">
                                <img className="project-card__img" src={geekconf} alt=""/>
                            </div>
                            <div className="col-md-6 col-lg-5 project-card__info">
                                <br/>
                                <h3 className="project-card__title">
                                    Perfiles de conferencia
                                </h3>
                                <p className="project-card__info">
                                Realizamos perfiles de conferencia, para nuestro gran final, la geek conf, que se desarrollará
                                en Ruta N. <br/>
                                Para éste proyecto, creamos cartas de presentación, para el día de la certificación.
                                </p>
                                <p className="project-card-stack">
                                    Habilidades usadas:
                                </p>
                                <br/>
                                <div className="container">
                                <ul className="tags ul">
                                    <li className="li">HTML5</li>
                                    <li className="li">CSS3</li>
                                    <li className="li">BOOTSTRAP</li>
                                    <li className="li">JavaScript</li>
                                    <li className="li">GIT</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    
                    <br/><br/><br/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portafolio
