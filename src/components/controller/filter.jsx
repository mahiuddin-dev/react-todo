import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const FilterBtn = ({ filter, handleFilter, filterText }) => (
  <Button
    className={filter === filterText ? "bg-dark" : null}
    onClick={() => handleFilter(filterText)}
  >
    {filterText.charAt(0).toUpperCase() + filterText.slice(1).toLowerCase()}
  </Button>
);
FilterBtn.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};

const Filter = ({ filter, handleFilter }) => (
  <ButtonGroup>
    <FilterBtn filter={filter} handleFilter={handleFilter} filterText="all" />
    <FilterBtn
      filter={filter}
      handleFilter={handleFilter}
      filterText="running"
    />
    <FilterBtn
      filter={filter}
      handleFilter={handleFilter}
      filterText="completed"
    />
  </ButtonGroup>
);
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
export default Filter;
