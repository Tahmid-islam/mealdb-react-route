import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import "./MealDetails.css";

const MealDetails = () => {
  const { id } = useParams();
  const [mealDetail, setMealDetail] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMealDetail(data.meals));
  }, []);

  return (
    <div className="container w-50 py-3 px-4">
      {mealDetail.map((item) => (
        <Card className="rounded" key={item.idMeal}>
          <Card.Img
            variant="top"
            className="img-fluid"
            src={item.strMealThumb}
          />
          <Card.Body>
            <Card.Title>
              <strong>{item.strMeal}</strong>
            </Card.Title>
            <Card.Text>
              <strong>Meal Id:</strong> {item.idMeal}
            </Card.Text>
            <Card.Text>
              <strong>Category:</strong> {item.strCategory}
            </Card.Text>
            <Card.Text className="description">
              <strong>Details:</strong> {item.strInstructions}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MealDetails;
