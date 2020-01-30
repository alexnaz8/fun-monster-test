import React from "react";
import "./search.styles.css";

export const Search = ({ placeholder, changeHandler }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={changeHandler}
    />
);
