import React, { useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./MyCheckbox.module.css";

interface MyCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({ checked, onChange, label, disabled }) => {
    
    return (
        <div className={styles.checkboxWrapper}>
            <CheckboxPrimitive.Root
                className={`${styles.checkbox} ${checked ? styles.checked : ""}`}
                checked={checked}
                onCheckedChange={onChange}
                disabled={disabled}
            >
                <CheckboxPrimitive.Indicator className={styles.checkboxIndicator}>
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    );
};

export default MyCheckbox;
