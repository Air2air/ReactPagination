import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { Row, Col, Button } from "react-bootstrap";


function Topic() {
  const [currentPage, setCurrentPage] = useState(0);
  const [profiles, setProfile] = useState([]);

  const dataSource = "./data/topics.json";

  useEffect(() => {
    fetch(dataSource)
      .then((data) => data.json())
      .then(({ topics }) => {
        setProfile(topics.profiles);
      });
  }, []);

  const PER_PAGE = 1;
  const offset = currentPage * PER_PAGE;
  const currentPageData = profiles.slice(offset, offset + PER_PAGE);

  function handlePrevClick() {
    setCurrentPage(currentPage - 1);
  }

  function handleNextClick() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <Layout>
      <Row>
        <Col xs lg="2">
          {/* {navigateToHome} */}
        </Col>
        <Col md="auto">
          {currentPageData.map((profile) => {
            const { topicId, category, gender, content } = profile;
            return (
              <Col key={topicId}>
                <p>{category}</p> {gender}
                <h1>{content}</h1>
              </Col>
            );
          })}
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row>
        <div id="paginate">
          <Button variant="btn btn-success" onClick={handlePrevClick}>
            PrevClick{" "}
          </Button>
          <Button variant="btn btn-success" onClick={handleNextClick}>
            NextClick{" "}
          </Button>
        </div>
      </Row>
    </Layout>
  );
}

export default Topic;
