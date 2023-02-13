import { FC } from "react";

interface CollapseProps {
  titre: string;
  content: string | string[];
}

const Collapse: FC<CollapseProps> = ({ titre, content }) => {
  console.log(typeof content);
  return (
    <details className="details">
      <summary className="summary">
        <p>{titre}</p>
        <div>{""}</div>
      </summary>
      <>
        {typeof content === "object" ? (
          <div className="content">
            {content.map((item: string) => {
              return <div>{item}</div>;
            })}
          </div>
        ) : (
          <div className="content"> {content}</div>
        )}
      </>
    </details>
  );
};

export default Collapse;
