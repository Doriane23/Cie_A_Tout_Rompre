import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
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
