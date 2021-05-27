import React from "react";
// import { Row, Col } from 'react-bootstrap'

export const Search = (
  {
  GenderValue,
  PaymentValue,
  setGenderValue,
  setPaymentValue,
  searchText,
  handleUserInput,
  searchUser,
  filterUsersProfile
}) => {
  const filterByGender = async (e) => {
    const value = e.target.value;
    await setGenderValue(value);
    await filterUsersProfile(value);
  };

  const filterByPaymentMethod = async (e) => {
    const value = e.target.value;
    await setPaymentValue(value);
    await filterUsersProfile(value);
  };

  return (
    <>
    {/* <Row className="justify-content-center">
      <Col sm={8} md={6}>
      <form onSubmit={searchUser}>
        <input
          type="text"
          name="search"
          placeholder="Search Profile"
          value={searchText}
          onChange={handleUserInput}
        />
        <input type="submit" value="Search" />
      </form>
      </Col>
      </Row>
      <Row>
    <Col>
      <Row>
        <p> Filter users profile </p> <br />
        <Col>
          Gender:{" "}
          <select onChange={filterByGender} value={GenderValue}>
            <option value="" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer to skip">Prefer to skip</option>
          </select>
        </Col>

        <Col>
          Payment Type:{" "}
          <select onChange={filterByPaymentMethod} value={PaymentValue}>
            <option value="" disabled>
              Payment Method
            </option>
            <option value="check">Check</option>
            <option value="cc">CC</option>
            <option value="money order">Money Order</option>
            <option value="paypal">Paypal</option>
          </select>
        </Col>
      </Row>
      </Col>
    </Row> */}
    </>
  );
};
