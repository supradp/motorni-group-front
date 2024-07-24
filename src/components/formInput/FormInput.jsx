import React from "react";
import "./formInput.scss";
import { useMask } from "@react-input/mask";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const FormInput = ({ value, setValue, ph, isPhone = false, type, id = "" }) => {
    const inputRef = useMask({ mask: "+___ (__) ___-__-__", replacement: { _: /\d/ } });

    const { width } = useWindowDimensions();

    return (
        <div className="form-input">
            {type === "file" && (
                <label className="form-input-file-lable" htmlFor={id}>
                    {value ? `Обрано : ${value}` : "Обрати файл"}
                </label>
            )}
            <input
                ref={isPhone ? inputRef : null}
                type={type}
                className={type === "file" ? "form-input__input form-input__input-file" : "form-input__input"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={ph}
                size={width < 700 ? 15 : null}
                minLength={4}
                id={id}
            />
        </div>
    );
};

export default FormInput;
