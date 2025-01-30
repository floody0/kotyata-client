import React from "react";
import styles from "./MyInput.module.css";

interface Props {
    className?: string;
    id?: string;
    name?: string;
    type: string;
    placeholder?: string;
    required?: boolean | false;
    tabindex?: number;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const MyInput = (props: Props) => {
    return (
        <input
            className={`${styles.myInput} ${props.className || ""}`}
            id={props.id}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            tabIndex={props.tabindex}
            value={props.value}
            checked={props.checked}
            disabled={props.disabled}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            onBlur={props.onBlur}
        />
    );
};

export default MyInput;
