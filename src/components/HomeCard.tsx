import { FC } from "react";
import { Link } from "react-router-dom";

interface HomeCardProps {
  id: string;
  cover: string;
  title: string;
}

const HomeCard: FC<HomeCardProps> = ({ id, cover, title }) => {
  return (
    <Link to={`/accomodation/${id}`} key={`${id}`} className="card-wrapper">
      <div className="card">
        <div className="overlay"></div>
        <img src={`${cover}`} alt="" />
        <div className="content">
          <p className="location-title">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
