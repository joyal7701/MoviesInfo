import React from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
const App = () => {
  return (
    <div>
      <div>
        <div>
          <MovieList />
        </div>
        <div>
          <MovieDetail />
        </div>
      </div>
    </div>
  );
};
export default App;
