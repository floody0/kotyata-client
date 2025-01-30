import React, { useState } from "react";
import styles from "./MyCheckbox.module.css";
import MyInput from "../MyInput/MyInput";

interface MyCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({ checked, onChange, label, disabled }) => {
    
    return (
        <div className={styles.checkboxWrapper}>
            <MyInput
                className={styles.myCheckbox}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <label className={styles.checkboxLabel} htmlFor="checkbox">{label}</label>
        </div>
    );
};

export default MyCheckbox;
