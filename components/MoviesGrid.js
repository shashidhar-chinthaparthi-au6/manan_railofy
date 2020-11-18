import { Component } from 'react';
import Movie from './MovieItem';
import styles from "../styles/Home.module.css"

class MoviesGrid extends Component {
    render() {

        let moviesGrid = Array.from(this.props.movies).map((movie, i) => {
            return <Movie key={i} movie={movie} displayMovieDetails={this.props.displayMovieDetails} />
        });

        return (
            <div className={styles.movies_container}>
                <span className={styles.search_query}>{this.props.results}<strong>{this.props.searchKey}</strong></span>
                <div className={styles.movie_grid}>
                    {moviesGrid}
                </div>
            </div>
        )
    }
}



export default MoviesGrid;