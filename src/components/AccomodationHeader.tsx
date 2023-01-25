import { FC } from "react";

interface AccomodationHeaderProps {
  rating: string;
  title: string;
  location: string;
  tags: string[];
  host: { name: string; picture: string };
}

const AccomodationHeader: FC<AccomodationHeaderProps> = ({
  rating,
  title,
  location,
  host,
  tags,
}) => {
  // Create a dummy array to be able to iterate over the star and create html element
  const iterableStar = Array(parseInt(parseFloat(rating).toFixed())).fill(0);
  const remainingStar = Array(5 - iterableStar.length).fill(0);
  return (
    <div className="accomodation-header">
      <div className="block1">
        <h1>{title}</h1>
        <p>{location}</p>
        <div className="tag-container">
          {tags.map((tag, index) => {
            return (
              <div className="tag" key={`${index} - ${tag}`}>
                <span>{tag}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="block2">
        <div className="host-and-rate">
          <div className="host-block">
            <p>{host.name}</p>
            <div
              className="host-picture"
              style={{
                backgroundImage: `url(${host.picture})`,
              }}
            ></div>
          </div>
          <div className="star-container">
            {iterableStar.map((iterableStar, index) => {
              return (
                <div
                  className="colorful-start"
                  key={`${index} - ${iterableStar}`}
                ></div>
              );
            })}
            {remainingStar.map((remainStar, index) => {
              return (
                <div
                  className="gray-star"
                  key={`${index} - ${remainStar}`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomodationHeader;
