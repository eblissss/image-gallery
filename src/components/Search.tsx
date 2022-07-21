import React from "react";
import SearchIcon from "../assets/search.svg"

export default function Search() {
    return (
    <div className="SearchBack">
        <input className="SearchInput" placeholder="type something..."></input>
        <button type="button" className="SearchButton">
            <img src={SearchIcon} alt="" className="SearchIcon"></img>
        
        </button>
    </div>
    );
}