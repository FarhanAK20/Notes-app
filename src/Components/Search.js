import React from "react";
import { MdSearch } from "react-icons/md";
const Search=({handleSearch})=>{
    return(
        <div className="search">
            <MdSearch className="search-icon"></MdSearch>
            <input type="text" placeholder="type to search...." onChange={(e)=>{handleSearch(e.target.value)}}></input>
        </div>
    );
}
export default Search;