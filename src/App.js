import React, { useState, useEffect } from "react";
import { Layout } from "./layouts/Layout";
import ReactPaginate from "react-paginate";
import { Row, Col, Card, CardDeck } from "react-bootstrap";

import "./App.css";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [profiles, setProfile] = useState([]);
  const singleUserProfile = useState();
  const [home_button, show_home_button] = useState(false);

  useEffect(() => {
    fetch("./data/api.json")
      .then((data) => data.json())
      .then(({ records }) => {
        setProfile(records.profiles);
      });
  }, []);

  const PER_PAGE = 1;
  const offset = currentPage * PER_PAGE;
  const currentPageData = profiles.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(profiles.length / PER_PAGE);
  const foundPageData = singleUserProfile.slice(offset, offset + PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
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

  return (
    <Layout>
      {navigateToHome}
      <Row>
        <CardDeck>
          {UserProfile.map((profile) => {
            const { UserName, FirstName, LastName, Email } = profile;
            return (
              <Col key={UserName}>

                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <p>
                  {UserName} Email:{Email}
                </p>

                <div>
                  <h2>
                    {FirstName}, {LastName}
                  </h2>
                </div>
              </Col>
            );
          })}
        </CardDeck>
      </Row>
      <div id="paginate">
        {
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        }
      </div>
    </Layout>
  );
};
