import { FC } from "react";

interface SliderProps {
  pictures: string[];
}

const Slider: FC<SliderProps> = ({ pictures }) => {
  const itemNumber = pictures.length;
  const sliderItemWidth = 80;
  const sliderLimite = -(itemNumber * sliderItemWidth);
  let sliderPosition = 0;
  return (
    <>
      <div className="carousel">
        <div className="inner">
          <>
            {pictures.map((picture, index) => {
              return (
                <div className="item" key={`${index} - ${picture}`}>
                  <img src={`${picture}`} alt="" />
                </div>
              );
            })}
          </>
        </div>
        {itemNumber > 1 && (
          <>
            <div className="next">
              <button
                className="btn-next"
                onClick={() => {
                  sliderPosition -= sliderItemWidth;
                  sliderPosition =
                    sliderPosition <= sliderLimite
                      ? (sliderPosition = 0)
                      : sliderPosition;
                  const innerContainer = document.querySelector(".inner");
                  innerContainer?.setAttribute(
                    "style",
                    `transform: translateX(${sliderPosition}vw)`
                  );
                }}
              ></button>
            </div>
            <div className="prev">
              <button
                className="btn-prev"
                onClick={() => {
                  sliderPosition += sliderItemWidth;
                  sliderPosition =
                    sliderPosition > 0
                      ? (sliderPosition = sliderLimite + sliderItemWidth)
                      : sliderPosition;
                  const innerContainer = document.querySelector(".inner");
                  innerContainer?.setAttribute(
                    "style",
                    `transform: translateX(${sliderPosition}vw)`
                  );
                }}
              ></button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Slider;
