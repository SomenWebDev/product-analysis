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
              <p></p>
              In our Shop You can find all kind of books.Your satisfaction is
              our priority.So,make it hurry.
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
