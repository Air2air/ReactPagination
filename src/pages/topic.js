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
          <>
            <Row>
                <Col className="topic-content"key={topicId}>
                  <p>{category}</p> {gender}
                  <h1>{content}</h1>
                </Col>
            </Row>
            <Row>
              <Col py-0 my-0>
                <div className="topics-button left" onClick={handlePrevClick}>
                  {prevButton}
                </div>
              </Col>
              <Col py-0 my-0>
                <div className="topics-button right" onClick={handleNextClick}>
                  {nextButton}
                </div>
              </Col>
            </Row>
          </>
        );
      })}
    </Layout>
  );
}

export default Topic;
