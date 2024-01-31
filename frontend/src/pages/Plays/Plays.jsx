import "./Plays.scss";
import Blackbird from "../../assets/AfficheBlackBird2023HDlogos.jpg";
import Retrouvailles from "../../assets/Affiche_LES_RETROUVAILLES.jpg";
import Jamaisseule from "../../assets/Affiche_JAMAIS_SEULE.jpg";
import Rencard from "../../assets/Affiche_Rencard_ou_Cocard.jpg";
import Jungle from "../../assets/Affiche_IL_FAUT_SAUVER_LA_JUNGLE_création_2023_IME_La_Sittelle.jpg";
import Royaume from "../../assets/Affiche_LE_ROYAUME_FOU _création_2022_IME_La_Sittelle.jpg";
import Festivalrecit from "../../assets/Affiche_Festival_des_récits_juin_2023.jpg";

function Plays() {
  return (
    <div>
      <h1>Nos représentations</h1>
      <div>
        <h2>Blackbird</h2>
        <img src={Blackbird} alt="afficheblackbird" />
        <p>
          "Blackbird" interroge notre morale et ses limites. Deux personnages se
          retrouvent après 15 ans de séparations. Adèle vient se confronter à
          Dider, l'homme avec lequel elle a vécu une histoire par le passé. Au
          moment des faits, Didier avait 35 ans et elle 12 ans. Après plusieurs
          mois de relation, Didier est arrêté par la police et fait quelques
          années de prison. En parallèle, Adèle tente de se reconstruire.
        </p>
        <button type="button">J'achete ma place</button>
        <div>
          <h2>Les Retrouvailles</h2>
          <img src={Retrouvailles} alt="affichelesretrouvailles" />
          <button type="button">J'achete ma place</button>
        </div>
        <div>
          <h2>Jamais Seule</h2>
          <img src={Jamaisseule} alt="affichejamaisseule" />
          <button type="button">J'achete ma place</button>
        </div>
        <div>
          <h2>Rencard ou Cocard</h2>
          <img src={Rencard} alt="afficherencardoucocard" />
          <button type="button">J'achete ma place</button>
        </div>
        <div>
          <h2>Il faut sauver la jungle !</h2>
          <img src={Jungle} alt="afficheilfautsauverlajungle" />
          <button type="button">J'achete ma place</button>
        </div>
        <div>
          <h2>Le Royaume Fou</h2>
          <img src={Royaume} alt="afficheleroyaumefou" />
          <button type="button">J'achete ma place</button>
        </div>
        <div>
          <h2>Festival des Récits</h2>
          <img src={Festivalrecit} alt="affichefestivaldesrecits" />
          <button type="button">J'achete ma place</button>
        </div>
      </div>
    </div>
  );
}

export default Plays;
