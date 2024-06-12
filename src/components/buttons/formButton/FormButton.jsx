import React from "react";
import "./formButton.scss";

const FormButton = ({ title, onPress, type }) => {
    return (
        <input type={type} className="form-button btn-animation" onClick={onPress} value={title} />
        // {title}
    );
};

export default FormButton;
