import React from "react";
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";
import useReviews from "./../../hooks/useReviews";

const Reviews = () => {
  const [allReviews, setAllReviews] = useReviews();

  return (
    <div className="my-5">
      <h1 className="text-center mb-5">What our Customers Say!</h1>
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {allReviews.map((reviews) => (
              <Review key={reviews._id} reviews={reviews}></Review>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Reviews;
