import "./App.css";
import { movies } from "../src/MovieItem";
import { Header } from "./components/header/Header";
import { MainContent } from "./components/main-content/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      {movies.map((elem) => {
        return (
          <MainContent img={elem.img} title={elem.title} rating={elem.rating} />
        );
      })}
    </div>
  );
}

export default App;
