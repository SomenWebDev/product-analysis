import React from "react";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";

import Reviews from "../Reviews/Reviews";
import useReviews from "./../../hooks/useReviews";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [allReviews, setAllReviews] = useReviews();
  return (
    <div>
      <section className="banner mt-5">
        <Banner></Banner>
      </section>
      <section className="review-section my-5">
        <Container>
          <Row xs={1} md={3} className="g-3">
            {allReviews.slice(0, 3).map((reviews) => (
              <Review key={reviews._id} reviews={reviews}></Review>
            ))}
          </Row>
        </Container>
        <div className="container my-3 text-center">
          <Link to="/reviews">
            <button className="rounded">See All Reviews</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
