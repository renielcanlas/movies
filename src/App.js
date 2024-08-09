import MovieList from "./components/MovieList";
import SideNav from "./components/SideNav";
import Movie from "./components/Movie";
import './App.css';
import { useState } from "react";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  }

  return (
    <div>
      <SideNav>
        <MovieList />
      </SideNav>
      <main>
        
      </main>
    </div>
  );
}

export default App;
