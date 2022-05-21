import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

import SearchPannel from "./search";
import Filter from "./filter";
import ViewController from "./view";
import Bulk from "./bulk";

const Controller = ({
  searchTerm,
  handleSearch,
  toggleForm,
  filter,
  handleFilter,
  view,
  changeView,
  clearSelected,
  clearCompleted,
  reset,
}) => (
  <div>
    <SearchPannel
      searchTerm={searchTerm}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <Filter filter={filter} handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ms-auto">
          <Bulk
            clearSelected={clearSelected}
            clearCompleted={clearCompleted}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);

Controller.proptype = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controller;
