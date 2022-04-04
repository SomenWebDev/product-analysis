import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="mt-3">
      <Container>
        <div>
          <h2 className="text-center">What is Context Api?</h2>
          <p>
            In react application data usually passed from parents to child via
            props.But it require many components thats sometimes
            inconvenients.Here context api is a solution.Its alternative of
            props drilling.Context Api provides a solution to send data without
            passing prop to every component.It allows us to pass data
            grandparent to child and share data at different level.
          </p>
        </div>
        <div>
          <h2 className="text-center">What is Semantic Tag?</h2>
          <p>
            Semantac tag is html markup which tells us about the content.For
            example a p tag indicates that text is written inside the p tag is
            paragraph.Similarly h1 tag indicates the header.In short semantic
            tag gives us the idea about the tag.p,article,section,header,footer
            are the example of semantic tags.
          </p>
        </div>
      </Container>

      <div></div>
    </div>
  );
};

export default Blogs;
