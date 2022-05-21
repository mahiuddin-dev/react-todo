import React from "react";
import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";

const SearchPannel = ({ searchTerm, handleSearch, toggleForm }) => (
  <div className="d-flex">
    <Input
      placeholder="Search term"
      className="mr-3"
      value={searchTerm}
      onChange={(event) => handleSearch(event.target.value)}
    />
    <Button color="primary" onClick={toggleForm}>
      New
    </Button>
  </div>
);
SearchPannel.proptype = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SearchPannel;
