import { FC } from "react";
import Banner from "../components/Banner";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <>
      <Banner imageUrl="src/assets/about-banner.png" />
      <div className="about-accordeon">
        <details className="details">
          <summary className="summary">
            <p>Fiabilité</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </div>
        </details>
        <details className="details">
          <summary className="summary">
            <p>Respect</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </details>
        <details className="details">
          <summary className="summary">
            <p>Service</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </div>
        </details>
        <details className="details">
          <summary className="summary">
            <p>Sécurité</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        </details>
      </div>
    </>
  );
};

export default About;
