import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccomodationAccordeon from "../components/AccomodationAccordeon";
import AccomodationHeader from "../components/AccomodationHeader";
import Slider from "../components/Slider";
import Error from "./Error";
import { accomodation } from "./Home";

interface AccomodationProps {}

const Accomodation: FC<AccomodationProps> = () => {
  // Retrieve the id
  const params = useParams();
  // State
  const [accomodationData, setAccomodationData] = useState<null | accomodation>(
    null
  );
  const [err, setErr] = useState(false);

  // Fetcher
  useEffect(() => {
    if (!accomodationData)
      fetch("/accomodations.json")
        .then((data) => data.json())
        .then((jsonData) => {
          const accomodation = jsonData.filter(
            (accomodation: accomodation) => accomodation.id === params.id
          )[0];
          if (!accomodation) {
            setErr(true);
          }
          setAccomodationData(accomodation);
        });
  }, []);

  if (err) {
    return <Error />;
  }
  // Prevent from rendering when fetch is not done
  if (!accomodationData) {
    return null;
  }

  return (
    <>
      <Slider pictures={accomodationData.pictures} />
      <AccomodationHeader
        rating={accomodationData.rating}
        title={accomodationData.title}
        location={accomodationData.location}
        tags={accomodationData.tags}
        host={accomodationData.host}
      />
      <AccomodationAccordeon
        description={accomodationData.description}
        equipments={accomodationData.equipments}
      />
    </>
  );
};

export default Accomodation;
