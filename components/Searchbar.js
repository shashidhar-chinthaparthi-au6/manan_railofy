import { Component } from 'react'
import styles from "../styles/Home.module.css"
class Searchbar extends Component {

    constructor() {
        super();
        this.generateURL = this.generateURL.bind(this);
    }

    generateURL() {
        let searchKey = document.getElementById('search_input').value.trim();
        let url = `https://www.omdbapi.com/?s=${searchKey}&apikey=32b7125b&type=series`;
        this.props.search(url, searchKey);
    }

    render() {
        let lists = Array.from(this.props).map((history, i) => {
            return <option key={i}>{history}</option>
        })
        return (
            
            <div className={styles.search_container}>
                <h1> Search By title</h1>
                <input type='search' id="search_input" list="search_history" placeholder="search by title" />
                <button onClick={this.generateURL}>Search</button>
                <datalist id={styles.search_history}>
                    {lists}
                </datalist>
            </div>
        )
    }
}

export default Searchbar;
