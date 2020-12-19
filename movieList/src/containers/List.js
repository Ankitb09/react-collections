import React, { Component } from "react";
import Card from "../components/Card";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true
    };
  }

  async componentDidMount() {
    const movies = await fetch("../../src/assets/data.json");
    const moviesJSON = await movies.json();
    console.log(movies);

    if (moviesJSON) {
      this.setState({
        movies: moviesJSON,
        loading: false
      });
    }
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <h1>Loading....</h1>;
    }
    return (
      <div className="row">
        {movies.map((movie, i) => (
          <div key={i} className="col-sm-2">
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}
