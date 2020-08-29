import React from "react";
import { connect } from "react-redux";
const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div>Select a Movie</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        title:{movie.title}
        <br />
        Category:{movie.Category}
        <br />
        Writer:{movie.Writer}
        <br />
        Stars:{movie.Stars}
        <br />
        Runtime:{movie.Runtime}
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { movie: state.selectedMovie };
};
export default connect(mapStateToProps)(MovieDetail);
