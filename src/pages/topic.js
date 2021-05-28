import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { Row, Col } from "react-bootstrap";

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
      {currentPageData.map((profile) => {
        const { topicId, category, gender, content, prevButton, nextButton } =
          profile;
        return (
          <div key={topicId}>
            <Row>
                <Col className="topic-content">
                  <p>{category}</p> {gender}
                  <h1>{content}</h1>
                </Col>
            </Row>
            <Row>
              <Col className="p-0 m-0">
                <div className="topics-button left" onClick={handlePrevClick}>
                  {prevButton}
                </div>
              </Col>
              <Col className="p-0 m-0">
                <div className="topics-button right" onClick={handleNextClick}>
                  {nextButton}
                </div>
              </Col>
            </Row>
            </div>
        );
      })}
    </Layout>
  );
}

export default Topic;