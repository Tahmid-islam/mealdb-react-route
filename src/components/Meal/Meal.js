import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Meal = (props) => {
  let history = useHistory();
  console.log(props.meal);
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
  const handleShowDetails = () => {
    history.push(`/meal/${idMeal}`);
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={handleShowDetails}
            className="text-white bg-danger rounded-3"
          >
            Show Details
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Meal;
