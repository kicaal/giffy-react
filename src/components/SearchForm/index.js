import React from "react";
import css from "./SearchForm.module.css";
import { useLocation } from "wouter";
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialRating = "", initialKeyword = "" }) {
  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const [path, pushLocation] = useLocation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };
  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
  };

  return (
    <form className={css["c-search"]} onSubmit={handleSubmit}>
      <button className={css["c-search-btn"]}>Buscar</button>
      <input
        className={css["c-search-input"]}
        onChange={handleChange}
        placeholder="Search a gif here..."
        type="text"
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}

export default React.memo(SearchForm);
