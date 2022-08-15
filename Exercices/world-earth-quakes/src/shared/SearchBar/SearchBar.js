import React from "react";
import './SearchBar.css'

const SearchBar = () => {
    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default SearchBar