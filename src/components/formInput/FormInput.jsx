import React from "react";
import "./formInput.scss";
import { useMask } from "@react-input/mask";

const FormInput = ({ value, setValue, ph, isPhone = false }) => {
    const inputRef = useMask({ mask: "+___ (__) ___-__-__", replacement: { _: /\d/ } });

    return (
        <div className="form-input">
            <input
                ref={isPhone ? inputRef : null}
                type="text"
                className="form-input__input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={ph}
            />
        </div>
    );
};

export default FormInput;
