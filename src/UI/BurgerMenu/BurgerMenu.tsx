import React from "react";
import styles from "./BurgerMenu.module.css";

type Props = {};

const BurgerMenu = (props: Props) => {
    return (
        <button className={styles.burgerMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default BurgerMenu;
