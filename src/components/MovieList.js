import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions";
class MovieList extends Component {
  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <div className="item" key={movie.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectMovie(movie)}
            >
              Select
            </button>
          </div>
          <div className="content">{movie.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { movies: state.movies };
};
export default connect(mapStateToProps, { selectMovie })(MovieList);
