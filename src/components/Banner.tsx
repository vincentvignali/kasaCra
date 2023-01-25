import { FC } from "react";

interface BannerProps {
  imageUrl: string;
  text?: string;
}

const Banner: FC<BannerProps> = ({ imageUrl, text }) => {
  return (
    <div
      className="image-banner"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h2>{text}</h2>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
