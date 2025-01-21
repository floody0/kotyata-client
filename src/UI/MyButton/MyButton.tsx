import React from "react";
import styles from "./MyButton.module.css";

interface Props {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const MyButton = ({ children, ...props }: Props) => {
    return (
        <button
            onClick={props.onClick}
            className={`${styles.myButton} ${props.className}`}
        >
            {children}
        </button>
    );
};

export default MyButton;
