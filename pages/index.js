import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import MoviesGrid from '../components/MoviesGrid';
import Movie from '../components/Movie';


class MovieApp extends Component {

  constructor() {
    super();

    this.state = {
      movies: '',
      movieList: true
    }
  }

  logout = () => {
    //clears login data to logout the user.
    localStorage.clear();
    window.location.reload();
  }

  search = (url, searchKey) => {
    fetch(url)
      .then(data => data.json())
      .then(result => {
        if (result.Response === 'True')
          this.setState({
            movies: result.Search,
            result: `You searched for `,
            searchKey: searchKey,
            movieList: true
          });
        else
          this.setState({
            result: `No results found for keyword `,
            searchKey: searchKey,
          });
      })
      .catch(error => console.log(error));

    if (localStorage.getItem('history') !== null && searchKey !== '') {
      let historyArray = localStorage.getItem('history').split(',')

      historyArray.push(searchKey);

      let uniqueKeywords = Array.from(new Set(historyArray));

      localStorage.setItem('history', uniqueKeywords.join(','))
    }
    else {
      if(searchKey !== '')
      localStorage.setItem('history', searchKey)
    }
    // localStorage.setItem('history', `${history},${searchKey}`);
  }

  displayMovieDetails = (url) => {
    fetch(url)
      .then(data => data.json())
      .then(result => {
        if (result.Response === 'True') {
          this.setState({
            movies: [],
            movie: result,
            movieList: false,
          })
        }
      })
      .catch(error => console.log(error));
  }

  render = () => {
    // let history = [];
    // if (localStorage.getItem('history') !== null)
    //   history = localStorage.getItem('history').split(',');
    
      return (
        <div className={styles.container}>
          
          <Searchbar search={this.search}  />
          {
            this.state.movieList ?
              <MoviesGrid movies={this.state.movies} results={this.state.result} searchKey={this.state.searchKey} displayMovieDetails={this.displayMovieDetails} /> :
              <Movie movie={this.state.movie} />
          }
          
        </div>
      );
    
  }

}

export default MovieApp;
