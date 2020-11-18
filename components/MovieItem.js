import { Component } from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../styles/Home.module.css"

class Movie extends Component {
    fetchMovieDetails = (movieId) => {
        let url = `https://www.omdbapi.com/?i=${movieId}&apikey=52b196bf`
        this.props.displayMovieDetails(url);
    }
    render = () => {
        return (
            
            <div className={styles.movie} onClick={this.fetchMovieDetails.bind(this, this.props.movie.imdbID)}>
                <div className={styles.poster}>
                    <img width="250px" height="374px" src={this.props.movie.Poster} alt={this.props.movie.Title} />
                </div>
                <div className={styles.movies_details}>
                    <h4>{this.props.movie.Title}</h4>
                    <span className={styles.year}>{this.props.movie.Year}</span>
                </div>
            </div>
        )
    }
}

export default Movie;
