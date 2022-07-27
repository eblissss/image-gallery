import React, { ChangeEventHandler } from "react";
import SearchIcon from "../assets/search.svg"

export default function Search({search}: {search: ChangeEventHandler<HTMLInputElement>}) {
    return (
    <div className="SearchBack">
        <input id="searchInput" className="SearchInput" placeholder="type something..." onChange={search}></input>
        <button type="button" className="SearchButton">
            <img src={SearchIcon} alt="" className="SearchIcon"></img>
        
        </button>
    </div>
    );
}