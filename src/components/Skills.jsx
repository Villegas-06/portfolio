import React, { Component } from 'react'
import '../styles/Skills.css'
export class Skills extends Component {
    render() {
        return (
            <section id="Skills" className="container section mt-5">
                <div className="row section__resume progress-list js-progress-list">
                    <div className="col-md-12">
                        <h3 className="progress_list__skills">
                            Habilidades Generales
                        </h3>    

                        <div className="col-md-5 mr-auto">                 
                            <ul id="skill">
                                <li><span className="bar html"></span><h3>Html5</h3></li>
                                <li><span className="bar css"></span><h3>Css</h3></li>
                                <li><span className="bar js"></span><h3>JavaScript</h3></li>
                                <li><span className="bar bootstrap"></span><h3>Bootstrap</h3></li>
                                <li><span className="bar git"></span><h3>Git</h3></li>
                                <li><span className="bar hablididades"></span><h3>Hablidades blandas</h3></li>
                                <li><span className="bar node"></span><h3>Node JS</h3></li>
                                <li><span className="bar mysql"></span><h3>MySQL</h3></li>
                                <li><span className="bar react"></span><h3>React JS</h3></li>
                            </ul>
                        </div>
                    </div>   
                    </div> 
                <hr/> 
            </section>
        )
    }
}

export default Skills
