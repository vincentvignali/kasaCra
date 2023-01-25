import { FC } from "react";
import { Link } from "react-router-dom";

interface ErrorProps {}

const Error: FC<ErrorProps> = () => {
  return (
    <div>
      <h1 className="error-404">404</h1>
      <h3 className="subtitle">Oups! La page que vous demandez n'existe pas</h3>
      <Link className="back-to-home-404" to="/">
        Retourner vers la page d'acceuil{" "}
      </Link>
    </div>
  );
};

export default Error;
