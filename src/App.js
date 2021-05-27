import React, { useState, useEffect } from "react";
import { Layout } from "./layouts/Layout";
import image from "./images/logo192.png";
import { Search } from "./components/Search";
import ReactPaginate from "react-paginate";
import { Row, Col, Card, CardDeck } from "react-bootstrap";

import "./App.css";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [profiles, setProfile] = useState([]);
  const [singleUserProfile, setsingleUserProfile] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [home_button, show_home_button] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [GenderValue, setGenderValue] = useState("");
  const [PaymentValue, setPaymentValue] = useState("");

  useEffect(() => {
    fetch("api.json")
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
  const searchUser = (e) => {
    e.preventDefault();
    setErrorMsg("");
    let usersProfile = [...profiles];
    let foundUser = usersProfile.filter(
      (profile) =>
        profile.FirstName.toLowerCase() === searchText.toLowerCase() ||
        profile.LastName.toLowerCase() === searchText.toLowerCase()
    );
    if (foundUser.length === 0) {
      setErrorMsg(
        "No User Associated With Such Details... Please Search Again "
      );
      return;
    }
    setsingleUserProfile(foundUser);
    setSearchText("");
    show_home_button(true);
  };

  const filterUsersProfile = (value) => {
    let usersProfile = [...profiles];
    let foundUser = usersProfile.filter(
      (profile) => profile.PaymentMethod === value || profile.Gender === value
    );
    setsingleUserProfile(foundUser);
    show_home_button(true);
  };

  const handleUserInput = (e) => {
    setErrorMsg("");
    setSearchText(e.target.value);
  };

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
      <Search
        searchText={searchText}
        handleUserInput={handleUserInput}
        searchUser={searchUser}
        GenderValue={GenderValue}
        PaymentValue={PaymentValue}
        setGenderValue={setGenderValue}
        setPaymentValue={setPaymentValue}
        filterUsersProfile={filterUsersProfile}
      />
      {navigateToHome}
      <p>{errorMsg}</p>
      <Row>
        <CardDeck>
          {UserProfile.map((profile) => {
            const { UserName, FirstName, LastName, Gender, Email } = profile;
            return (
              <Col key={UserName}>
                <Card.Img variant="top" src={image} />
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
                  <p> Gender {Gender}</p>
                </div>
              </Col>
            );
          })}
        </CardDeck>
      </Row>
      <div id="paginate">
        {
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
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
