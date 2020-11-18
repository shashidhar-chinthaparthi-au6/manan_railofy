import  { Component } from 'react'
import styles from "../styles/Home.module.css"

export default class Movie extends Component {
    render() {
        return (
            <div className="movies_container">
                <div className="movie_details_grid">
                    <div className="poster">
                        <img src={this.props.movie.Poster} width="250px" alt={this.props.movie.Title} />
                        
                    </div>
                    <div className={styles.movie_data}>
                        <h2>
                            {this.props.movie.Title}
                            <em className={styles.year}>&nbsp;({this.props.movie.Year})&nbsp;</em>
                            <span className={styles.rated}>{this.props.movie.Rated}</span>
                        </h2>
                        <div className={styles.dataset-1}>
                            <span className={styles.production}>{this.props.movie.Production}</span><span>|</span> 
                            <span className={styles.runtime}>{this.props.movie.Runtime}</span><span>|</span>
                            <span className={styles.genre}>{this.props.movie.Genre}</span><span>|</span>
                            <span>{this.props.movie.Released} ({this.props.movie.Country})</span>
                        </div>
                        <span className={styles.language}>
                            <em>{this.props.movie.Language}</em>
                        </span>
                        <div className={styles.plot}>
                            {this.props.movie.Plot}
                        </div>
                        <div className={styles.dataset-2}>
                            <span>Director</span>
                            <strong className={styles.director}>{this.props.movie.Director}</strong>
                            <span>Stars</span>
                            <strong className={styles.stars}>{this.props.movie.Actors}</strong>
                            <span>Writers</span>
                            <span className={styles.writers}>{this.props.movie.Writer}</span>
                            <span>Box Office</span>
                            <strong className={styles.box_office}>{this.props.movie.BoxOffice}</strong>                            
                            <span>Awards</span>
                            <strong className={styles.awards}>{this.props.movie.Awards}</strong>
                            <span>
                                Ratings
                            </span>
                            <span className={styles.ratings}>
                                <span className={styles.imdb}>
                                    <i class="fab fa-imdb fa-lg"></i>&nbsp;
                                    <a href={`https://www.imdb.com/title/${this.props.movie.imdbID}/`} >{this.props.movie.imdbRating}</a>&nbsp;
                                </span>
                                &nbsp;
                                <span>Metacritic:</span>
                                <span className={styles.metaCritic}>
                                    {this.props.movie.Metascore}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* {JSON.stringify(this.props.movie)} */}
            </div>
        )
    }
}
