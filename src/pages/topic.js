import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Layout from "../components/layout/layout";
import { Row, Col, Button } from "react-bootstrap";

//import "./App.css";

function Topic() {


  const history = useHistory();




  const [currentPage, setCurrentPage] = useState(0);
  const [profiles, setProfile] = useState([]);
  const singleUserProfile = useState();
  const [home_button, show_home_button] = useState(false);

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
  const pageCount = Math.ceil(profiles.length / PER_PAGE);
  const foundPageData = singleUserProfile.slice(offset, offset + PER_PAGE);

  // function handlePageClick({ selected: selectedPage }) {
  //   setCurrentPage(selectedPage);
  // }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(currentPage + 1);
  }

  let japaToHome = () => {
    setProfile(profiles);
    show_home_button(false);
  };

  let UserProfile = home_button ? foundPageData : currentPageData;

  let navigateToHome = home_button ? (
    <button onClick={japaToHome}>All Users</button>
  ) : (
    ""
  );

  let buttonLabelPrevious = "Prev";
  let buttonLabelNext = "Next";

  return (
    <Layout>
      <Row>
        <Col xs lg="2">
          {navigateToHome}
        </Col>
        <Col md="auto">
          {UserProfile.map((profile) => {
            const { topicId, category, gender, content } = profile;
            return (
              <Col key={topicId}>
                <p>{category}</p> {gender}
                <h1>{content}</h1>
              </Col>
            );
          })}
        </Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
      <Row>
      <div id="paginate">

      <Button variant="btn btn-success" onClick={(handlePageClick)}>Click </Button>

      </div>
      </Row>
    </Layout>
  );
}

export default Topic;
