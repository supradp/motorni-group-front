import React from "react";
import "./formButton.scss";

const FormButton = ({ title, onPress }) => {
    return (
        <div className="form-button btn-animation" onClick={onPress}>
            {title}
        </div>
    );
};

export default FormButton;
