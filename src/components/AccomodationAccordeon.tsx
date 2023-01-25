import { FC } from "react";

interface AccomodationAccordeonProps {
  description: string;
  equipments: string[];
}

const AccomodationAccordeon: FC<AccomodationAccordeonProps> = ({
  description,
  equipments,
}) => {
  return (
    <div className="accomodation-accordeon">
      <details className="details">
        <summary className="summary">
          <p>Description</p>
          <div>{""}</div>
        </summary>
        <div className="content"> {description}</div>
      </details>
      <details className="details">
        <summary className="summary">
          <p>Équipements</p>
          <div>{""}</div>
        </summary>
        <div className="content">
          {" "}
          {equipments.map((equipement, index) => {
            return <div key={`${index} - ${equipement}`}>{equipement}</div>;
          })}
        </div>
      </details>
    </div>
  );
};

export default AccomodationAccordeon;
