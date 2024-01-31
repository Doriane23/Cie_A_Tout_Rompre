import "./Comedians.scss";
import Marie from "../../assets/Marie_Wanziniack_Noel.jpg";
import Emilien from "../../assets/Emilien_Decoudre.jpg";
import Cloe from "../../assets/Cloé_Chope.jpg";
import Justine from "../../assets/Justine_Rouet_Chabaux.JPG";
import Fabrice from "../../assets/Fabrice_Simon.jpg";

function Comedians() {
  return (
    <div>
      <h1>Comediens</h1>
      <div>
        <div>
          <h2>Marie WANZINIACK NOEL - présidente de l'association </h2>
          <img className="marie" src={Marie} alt="photomarie" />
          <p>
            Metteuse en scène et comédienne, Marie intègre le Conservatoire de
            Metz en art dramatique en 2009, puis au conservatoire de Nancy en
            2013 pour terminer en 2014. Elle joue dans "L'Eveil du printemps" de
            Frank Wedekind mis en scène par Guillaume Vincent en 2010 au lycée
            La Miséricorde de Metz, dans "La Flûte enchantée" de Mozart mis en
            scène par Daniel Mesguich en 2012 à l'Opéra-Théâtre de Metz
            Métropole. Elle écrit et met en scène "In bocca al lupo", en 2012 au
            Théâtre du Saulcy de Metz, une pièce franco-italienne. Elle écrit et
            réalise "9 mois" aux côtés d'Aurélien Munier en 2015-2017, produit
            par la compagnie Komorebi ; joue dans "A la recherche de Leonardo",
            une pièce franco-italienne sur Léonard de Vinci mise en scène par
            Bruno Lovadina de la compagnie italienne Bel Teatro en 2016. Elle
            écrit des textes qu'elle slame et rappe sous le pseudonyme WANZ'EM,
            elle s'intéresse également à la photographie et au montage. A la
            tête de la compagnie Komorebi depuis 2015, elle est porteuse de
            projets dont L'Ecole des femmes" de Molière qu'elle met en scène
            pendant plusieurs années.
          </p>
          <h2>Emilien DECOUDRE - trésorier de l'association</h2>
          <img className="emilien" src={Emilien} alt="photoemilien" />
          <p>
            Émilien Decoudre commence sa formation auprès de Gérard Savoisien
            avant d'intégrer le conservatoire du 14ème arrondissement de Paris.
            C'est durant sa formation qu'il termine sa formation avec des cours
            d’interprétation, d'écriture et de mise en scène. Travaillant sous
            la direction de Gérard Savoisien, Nathalie Bécue, et Didier
            Girauldon, Émilien Decoudre est comédien, auteur, et régisseur
            plateau, il est investi dans toutes les créations de la compagnie,
            et est aux côtés de Justine Rouet Chabaux lors de la création de
            celle-ci en 2015.
          </p>
          <h2>Cloé CHOPE - comédienne et créatrice lumière</h2>
          <img className="cloe" src={Cloe} alt="photocloe" />
          <p>
            Cloé Chope est cheffe opératrice, éclairagiste et assistante caméra
            en plus d'être comédienne. Après l’obtention du diplôme de BTS
            audiovisuel option image, elle intègre en 2012 l’École Nationale
            Supérieure Louis Lumière. Lors de cette formation, elle expérimente
            différentes techniques de prise de vue, réflexions esthétiques et
            mise en pratique de la construction d’une image par rapport à un
            scénario (composition, lumière…). Ce fut l’occasion également pour
            elle de réaliser divers courts métrages. Diplômée en 2015, elle
            devient assistante caméra sur des tournages de longs métrages. Entre
            deux films, Cloé Chope s'investit dans la création lumière aussi
            bien dans des courts métrages en tant que cheffe opératrice que dans
            le spectacle vivant. Complétant sa formation au Studio Pygmalion,
            Cloé Chope participe à plusieurs spectacles et performances à Reims
            et en région Parisienne.
          </p>
          <h2>Justine ROUET CHABAUX - comédienne et metteuse en scène</h2>
          <img className="justine" src={Justine} alt="photojustine" />
          <p>
            Justine Rouet Chabaux est formée tout d’abord au Conservatoire de
            Metz en théâtre et en danse, puis elle termine sa formation au sein
            du Conservatoire du XIVème arrondissement de Paris.Tout au long de
            ces années elle acquiert en parallèle une expérience de
            l’enseignement du théâtre : elle est engagée pendant plusieurs
            années par la Mairie de Paris pour intervenir en écoles primaires,
            puis également dans plusieurs théâtres pour diriger des stages pour
            ados et adultes. En tant que comédienne, c’est en 2013 que le prix
            de «meilleure actrice » lui est décerné par le festival de Cabourg.
            En 2015, elle fonde la Compagnie À Tout Rompre avec laquelle elle
            porte plusieurs créations et adaptations en tant que metteure en
            scène, comédienne et autrice. Depuis deux ans, elle met en place
            plusieurs créations dans différentes structures rémoises, ainsi que
            dans des instituts accueillant des personnes en situation de
            handicap.
          </p>
          <h2>Fabrice SIMON - comédien</h2>
          <img className="fabrice" src={Fabrice} alt="photofabrice" />
          <p>
            Fabrice Simon est formé jusqu'à ces 20 ans au Conservatoire
            d'Antony, dans lequel il obtient le second prix d'interprétation
            lors des concours des Conservatoires des Hauts de Seine. Il termine
            sa formation aux Ateliers de L'Ouest à Paris. Depuis quinze ans,
            Fabrice Simon interprète de nombreux rôles au théâtre,
            essentiellement dans des comédies, que ce soit au Festival
            d'Avignon, à Paris, et en tournée dans toute la France.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comedians;
