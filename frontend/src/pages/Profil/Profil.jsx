import "./Profil.scss";
import React, { useState } from "react";

function Profil() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [adresse, setAdresse] = useState("");

  const handleSave = () => {
    console.info("Données perso :", { prenom, nom, dateNaissance, adresse });
  };

  return (
    <div>
      <div>
        <h1>Mon Profil</h1>
        <h2>Mes informations</h2>
        <div>
          <label>
            <p>Prénom :</p>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </label>
          <label>
            <p>Nom :</p>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </label>
          <label>
            <p>Date de naissance :</p>
            <input
              type="text"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
            />
          </label>
          <label>
            <p>Adresse :</p>
            <input
              type="text"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </label>
        </div>
        <button type="button" onClick={handleSave}>
          Enregistrer
        </button>
        <h2>Mon historique d'achat</h2>
      </div>
    </div>
  );
}

export default Profil;
