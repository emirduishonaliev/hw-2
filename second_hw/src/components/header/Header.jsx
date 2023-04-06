import React from "react";
import "./Header.css";
import { Button } from "../UI/button/Button";

export const Header = () => {
  return (
    <header>
      <h1>Favorite Movies</h1>
      <Button color={"orange"} title={"ADD MOVIE"} />
    </header>
  );
};
