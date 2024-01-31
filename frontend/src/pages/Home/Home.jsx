import "./Home.scss";
import logohome from "../../assets/Logo_ATR_2.jpg";

function Home() {
  return (
    <div>
      <img className="logohome" src={logohome} alt="logo" />
      <div>
        <h1>Nos ateliers</h1>
        <p>
          ATELIER THÉÂTRE - CRÉATION COLLECTIVE : Tous niveaux - à partir de 18
          ans. Jeudi de 20H00 à 22H00 Nouveau : Mardi de 20H00 à 22H00 Atelier
          théâtre proposant une base d'échauffement, de relaxation, et
          d'improvisations. L'année est rythmée par plusieurs représentations
          devant un public. L'équipe portera une pièce contemporaine, mais aussi
          une création collective, dans laquelle chacun et chacune pourra
          s'investir à différents postes : interprétation, écriture, mise en
          scène, scénographie... Renseignements et inscriptions : Compagnie À
          Tout Rompre 06 32 32 87 33 / compagnie.atoutrompre@gmail.com Tarif :
          220€00{" "}
        </p>
        <p>
          ATELIER THÉÂTRE - ENFANTS "imaginaire et créativité": Enfants de 6 à
          12 ans Mardi de 18h00 à 19h15 L'objectif sera de partir à la rencontre
          des inspirations de chaque enfant : quels sont leurs héros et héroïnes
          ? Quels arts/univers les attirent ? Le groupe sera invité à explorer
          la scène, mais aussi l’interprétation de personnages et de situations
          durant les ateliers. De plus, d’autres formes de créations seront
          proposées : ateliers d’écriture, écriture de plateau, mais aussi des
          exercices de mise en scène : comment mettre en valeur une personne sur
          l’espace scénique ? Et tout un groupe ? Où placer le public ?
          Exercices de confiance, improvisations et productions collectives
          permettront de mettre en évidence la singularité de chacune et de
          chacun, pour établir un lien de confiance qui facilitera une certaine
          spontanéité par la suite. Renseignements et inscriptions : Maison de
          Quartier Clairmarais 03 26 47 05 11 /
          clairmarais@maisondequartier-reims.fr Tarif : 207€00
        </p>
        <p>
          ATELIER CRÉATIONS ÉTUDIANTES : Étudiantes et étudiants Mercredi de
          18H15 à 20H45 à la Boussole de Reims Avec le CROUS de Reims et la
          troupe Rencard ou Cocard Cet atelier de création est gratuit pour les
          étudiantes et étudiants. L'objectif est de mettre en place
          collectivement deux créations au cours de l'année : la première sur le
          thème des violences sexistes et sexuelles, et la seconde création en
          lien avec la journée internationale des droits des femmes. Plusieurs
          représentations ont lieu toute au long de l'année, afin de
          sensibiliser le public des établissements d’enseignement supérieur et
          au Crous de Reims, Renseignements et inscriptions : Compagnie À Tout
          Rompre 06 32 32 87 33 / compagnie.atoutrompre@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Home;
