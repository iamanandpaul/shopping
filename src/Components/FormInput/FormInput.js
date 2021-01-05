import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="formInput" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`S{otherProps.value.length ? 'shrink' : ''} formInput__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
