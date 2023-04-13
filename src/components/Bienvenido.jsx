import React, { Component } from "react";
import "../styles/Bienvenido.css";

export class Bienvenido extends Component {
  render() {
    return (
      <div id="bienvenido">
        <section className="container mt-5">
          <div className="row">
            <div className="col-md-10">
              <h2 className="h2">Bienvenido</h2>
              <p className="section Bienvenido_div_txt">
                Soy desarrollador web junior capaz de construir una web desde
                cero: <br /> desde el concepto, la navegación, el diseño y la
                programación hasta UX y UI. <br />
                Habilidad para escribir código bien diseñado, comprobable y
                eficiente utilizando <br /> las mejores prácticas actuales en
                desarrollo web. Aprendiz rápido y trabajador en equipo.
              </p>
              <br />
              <p className="section Bienvenido_div_txt">
                {" "}
                En mi recorrido dentro de Talent.com potencié mis habilidades en
                JavaScript y el idioma inglés. Me considero una persona
                altamente proactiva, con habilidades naturales de liderazgo,
                pude liderar un equipo de 7 personas durante 2 años obteniendo
                habilidades blandas; les ayudé técnica y personalmente en el
                desarrollo de problemas, algoritmos y solución de códigos para
                hacerlos funcionales y eficientes. Trabajé desarrollando
                estrategias que ayudaron a impulsar la empresa y también usando
                puppeteer, creé un proyecto desde 0 en el cual desarrollé un
                script para hacer web scraping y obtener información de páginas.
                Soy un apasionado por el área de TI, aprendo fácilmente y me
                enfoco en mis objetivos. He tomado cursos de manera empírica ya
                que soy un entusiasta por aprender
              </p>
              <br />
            </div>
          </div>
          <hr />
        </section>
      </div>
    );
  }
}

export default Bienvenido;
