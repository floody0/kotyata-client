import React from "react";
import styles from "./MyButton.module.css";

interface Props {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const MyButton = ({ children, ...props }: Props) => {
    return (
        <button
            onClick={props.onClick}
            className={`${styles.myButton} ${props.className || ""}`}
            disabled={props.disabled}
        >
            {children}
        </button>
    );
};

export default MyButton;
