import React, { useEffect, useState } from "react";
import { FormControl, InputGroup, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  return (
    <div className="container">
      <InputGroup className="mb-3 container py-3 w-50 rounded-3">
        <FormControl
          placeholder="Search Meal"
          aria-label="Search Meal"
          onChange={handleSearch}
        />
      </InputGroup>
      {!meals ? (
        <h2 className="text-center">No Result Found</h2>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Restaurant;
