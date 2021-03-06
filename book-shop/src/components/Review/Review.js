import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ reviews }) => {
  const { name, imageURL, review, rating } = reviews;
  return (
    <div>
      <Col>
        <Card style={{ height: "300px" }}>
          <Card.Img
            variant="top"
            src={imageURL}
            style={{ borderRadius: "50%", width: "50px" }}
            className="mx-auto mt-2"
          />
          <Card.Body>
            <p>{name}</p>
            <p> Review: {review}</p>
            <p>Rating: {rating}</p>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Review;
