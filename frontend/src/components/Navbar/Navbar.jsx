import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import logohome from "../../assets/Logo_ATR_2.jpg";

function Navbar() {
  return (
    <div>
      <img className="logohome" src={logohome} alt="logo" />
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
      </ul>
      <ul>
        <Link to="/pieces">
          <li>Représentations</li>
        </Link>
      </ul>
      <ul>
        <Link to="/comediens">
          <li>Comédiens</li>
        </Link>
      </ul>
      <ul>
        <Link to="/compte">
          <li>Profil</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
