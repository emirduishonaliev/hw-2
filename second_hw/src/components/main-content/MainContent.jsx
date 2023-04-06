import React from "react";
import "./MainContent.css";
import { Button } from "../UI/button/Button";

export const MainContent = (movies) => {
  const { title, rating, img } = movies;
  return (
    <div className="card">
      <div>
        <img className="img" src={img} alt="default" />
      </div>

      <div>
        <h3 className="title">{title}</h3>
        <div className="btns">
          <h5 className="stars">{`${rating}/5 stars`}</h5>
          <Button color={"red"} title={"DELETE"} />
          <Button color={"blue"} title={"EDIT"} margin={"-35px"} />
        </div>
      </div>
    </div>
  );
};
