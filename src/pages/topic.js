import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { Row, Col } from "react-bootstrap";

function Topic() {
  const [currentPage, setCurrentPage] = useState(0);
  const [topics, setTopic] = useState([]);

  const dataSource = "./data/topics.json";

  useEffect(() => {
    fetch(dataSource)
      .then((data) => data.json())
      .then(({ topics }) => {
        setTopic(topics);
      });
  }, []);

  const PER_PAGE = 1;
  const offset = currentPage * PER_PAGE;
  const currentPageData = topics.slice(offset, offset + PER_PAGE);

  function handlePrevClick() {
    let prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
      console.log(prevPage);
    } else {
      console.log("Can't go back");
    }
  }

  function handleNextClick() {
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    console.log(nextPage);
  }

  return (
    <Layout>
      {currentPageData.map((topic) => {
        const { topicId, category, gender, content, prevButton, nextButton } =
          topic;
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
