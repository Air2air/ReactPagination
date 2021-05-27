import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";


export default function Pagination() {
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

  let buttonLabelPrevious = "Prev";
  let buttonLabelNext = "Next";


    return (
        <div id="paginate">
        {
          <ReactPaginate
            previousLabel={buttonLabelPrevious}
            nextLabel={buttonLabelNext}
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
    )
}