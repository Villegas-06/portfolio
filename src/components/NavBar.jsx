import React from "react";
import "../styles/Navbar.css";

class NavBar extends React.Component {
  render() {
    return (
        <div className="conatiner mb-5">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top mb-5">
              <button
                className="navbar-toggler nav_btn"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon nav_btn " />
              </button>
              <div
                className="nav_colapse collapse navbar-collapse nav_text"
                id="navbarResponsive"
              >
                <ul className="navbar-nav nav_li_text">
                  <li className="nav-item">
                    <a className="nav-link" href="#bienvenido">
                      Bienvenido
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Skills">
                      Habilidades
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="#portafolio">
                      Portafolio
                    </a>
                  </li>
                </ul>
              </div>

          </nav>
      </div>
    );
  }
}

export default NavBar;
