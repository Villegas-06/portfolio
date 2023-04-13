import React, { Component } from "react";
import "../styles/Hero.css";
export class Hero extends Component {
  render() {
    return (
      <header className="main-header mt">
        <br />
        <br />
        <div className="row personal-profile">
          <div className="container col-row-5 personal-profile__contact mb-5 ">
            <p className="personal-profile__name">
              Miguel Angel Montoya Villegas
            </p>
            <p className="personal-profile__work">Desarrollador FrontEnd</p>
            <br />
            <table>
              <tbody>
                <tr>
                  <th className="row container">Edad:</th>
                  <td className="container mt-1">22</td>
                </tr>
                <tr>
                  <th className="row container">Teléfono:</th>
                  <td className="container">3197287605</td>
                </tr>
                <tr>
                  <th className="row container">Email:</th>
                  <td className="container text">
                    <a href="gmail.com"> villegas4006@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <th className="row container">Dirección:</th>
                  <td className="container">Calle 103 # 76 - 54</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p className="personal_profile-social">
              <a
                href="https://github.com/Villegas-06?tab=repositories"
                className=""
              >
                <i className="fab fa-github personal_profile_links"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-angel-montoya-villegas-99206018a/"
                className=""
              >
                <i className="fab fa-linkedin ml-2 personal_profile_links"></i>
              </a>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;
