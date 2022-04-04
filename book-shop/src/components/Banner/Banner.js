import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import bookImage from "../../images/book.jpg";

const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="description">
              <h1 className="fs-1 text-primary">Choose Your Favorite Book</h1>
              <p>
                The Art of War (Sunzi bingfa) is a 5th-century BCE military
                treatise written by the Chinese strategist Sun-Tzu (aka Sunzi or
                Sun Wu). Covering all aspects of warfare, it seeks to advise
                commanders on how to prepare, mobilise, attack, defend, and
                treat the vanquished.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="text-center">
              <Image src={bookImage} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
