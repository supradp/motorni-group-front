import React from "react";
import "./formInput.scss";
import { useMask } from "@react-input/mask";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const FormInput = ({ value, setValue, ph, isPhone = false }) => {
    const inputRef = useMask({ mask: "+___ (__) ___-__-__", replacement: { _: /\d/ } });

    const { width } = useWindowDimensions();

    return (
        <div className="form-input">
            <input
                ref={isPhone ? inputRef : null}
                type="text"
                className="form-input__input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={ph}
                size={width < 700 ? 15 : null}
            />
        </div>
    );
};

export default FormInput;
