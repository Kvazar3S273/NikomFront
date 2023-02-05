import React from "react";
import PropTypes from "prop-types";

const MyTextInput = ({ 
    field, 
    value, 
    label, 
    type, 
    onChangeHandler }) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={field}
        name={field}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

MyTextInput.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired
}

MyTextInput.defaultProps = {
    type: "text"
}

export default MyTextInput;
