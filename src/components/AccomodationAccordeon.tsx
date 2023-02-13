import { FC } from "react";
import Collapse from "./Collapse";

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
      <Collapse titre={"Description"} content={description} />
      <Collapse titre={"Equipement"} content={equipments} />
    </div>
  );
};

export default AccomodationAccordeon;
