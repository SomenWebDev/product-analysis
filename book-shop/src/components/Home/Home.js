import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import bookImage from "../../images/book.jpg";

const Home = () => {
  return (
    <div>
      <section className="banner mt-5">
        <Row>
          <Col xs={12} md={8}>
            <div className="description">
              <h1 className="fs-1 text-primary">Choose Your Favorite Book</h1>
              <p className="px-5">
                The Art of War (Sunzi bingfa) is a 5th-century BCE military
                treatise written by the Chinese strategist Sun-Tzu (aka Sunzi or
                Sun Wu). Covering all aspects of warfare, it seeks to advise
                commanders on how to prepare, mobilise, attack, defend, and
                treat the vanquished.
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <Image src={bookImage} />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;
