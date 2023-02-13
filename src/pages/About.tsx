import { FC } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const fiability = {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les  photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  };
  const respect = {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  };
  const service = {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  };
  const security = {
    title: "Securité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };
  return (
    <>
      <Banner imageUrl="about-banner.png" />
      <div className="about-accordeon">
        <Collapse titre={fiability.title} content={fiability.content} />
        <Collapse titre={respect.title} content={respect.content} />
        <Collapse titre={service.title} content={service.content} />
        <Collapse titre={security.title} content={security.content} />
      </div>
    </>
  );
};

export default About;
