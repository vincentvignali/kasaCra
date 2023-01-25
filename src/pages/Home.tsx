import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";

interface HomeProps {}

export type accomodation = {
  id: string;
  title: string;
  cover: string;
  description: string;
  location: string;
  equipments: string[];
  host: { name: string; picture: string };
  pictures: string[];
  rating: string;
  tags: string[];
};

const Home: FC<HomeProps> = () => {
  const [accomodations, setAccomodations] = useState<accomodation[] | []>([]);

  //Fetcher
  useEffect(() => {
    if (accomodations.length === 0)
      fetch("/accomodations.json")
        .then((data) => data.json())
        .then((jsonData) => setAccomodations(jsonData));
  }, []);
  return (
    <>
      <Banner
        imageUrl="/src/assets/IMG.png"
        text="Chez vous, partout et ailleurs"
      />

      <div className="cards-container">
        {accomodations.map((accomodation) => {
          return (
            <HomeCard
              id={accomodation.id}
              cover={accomodation.cover}
              title={accomodation.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
