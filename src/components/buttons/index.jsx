import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const CustomButton = ({ id, isCompleted, toggleComplete }) => {
  return (
    <Button
      className="ms-auto"
      color={isCompleted ? "danger" : "success"}
      onClick={() => toggleComplete(id)}
    >
      {isCompleted ? "Completed" : "Running"}
    </Button>
  );
};
CustomButton.proptype = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};
export default CustomButton;
