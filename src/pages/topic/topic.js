import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { Row, Col } from "react-bootstrap";
import Confidence from "../../components/blocks/confidence/confidence";
import Category from "../../components/blocks/category/category";
const dataSource = "./data/topics.json";

function Topic() {
  const [currentPage, setCurrentPage] = useState(0);
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    fetch(dataSource)
      .then((data) => data.json())
      .then(({ topics }) => {
        setTopic(topics);
      });
    setCurrentPage(0);
  }, []);

  const PER_PAGE = 1;
  const offset = currentPage * PER_PAGE;
  const currentPageData = topics.slice(offset, offset + PER_PAGE);
  const topicsCount = Object.keys(topics).length;

  function handlePrevClick() {
    let prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
      console.log(prevPage);
    } else {
      setCurrentPage(topicsCount - 1);
      console.log("Can't go back");
    }
  }

  function handleNextClick() {
    let nextPage = currentPage + 1;
    if (nextPage <= topicsCount - 1) {
      setCurrentPage(nextPage);
      console.log(nextPage);
    } else {
      setCurrentPage(0);
      console.log("Reached the end");
    }
  }

  function changeColor(color) {
    document.body.removeAttribute("class");
    document.body.classList.add(color);
  }

  return (
    <Layout>
      {currentPageData.map((topic) => {
        const {
          topicId,
          category,
          content,
          confidence,
          firstButton,
          secondButton,
          color,
        } = topic;

        changeColor(color);

        return (
          <div key={topicId}>
            <Row>
              <Col className="content px-5">
                <p>{category}</p>
                <p>{content}</p>
              </Col>
            </Row>
            <Confidence level={confidence} />
            <Category category={category} />
            <Row>
              <Col className="p-0 m-0">
                <div
                  className="topics-button left p-3 pb-5"
                  onClick={handlePrevClick}
                >
                  {firstButton}
                </div>
              </Col>
              <Col className="p-0 m-0">
                <div
                  className="topics-button right p-3 pb-5"
                  onClick={handleNextClick}
                >
                  {secondButton}
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
