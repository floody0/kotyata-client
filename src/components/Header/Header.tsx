"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Container from "../Container/Container";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
    const [count, setCount] = useState<number>(16);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('click');
    };
    
    return (
        <div className={styles.header}>
            <Container className={styles.headerContainer}>
                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    <span className={isMenuOpen ? styles.burgerActive : ''}></span>
                </div>
                <Link href="/" className={styles.logo}>
                    <Image
                        className={styles.logoImage}
                        src="/assets/header-logo.png"
                        alt="logo"
                        width={45}
                        height={55}
                    />
                    <h1 className={styles.logoTitle}>Kotyata Shop</h1>
                </Link>
                <div
                    className={`${styles.navigation} ${
                        isMenuOpen ? styles.navigationOpen : ""
                    }`}
                >
                    <Link className={styles.navigationLink} href="/">
                        Головна
                    </Link>
                    <Link className={styles.navigationLink} href="/products">
                        Каталог
                    </Link>
                    <Link className={styles.navigationLink} href="/about">
                        Про нас
                    </Link>
                </div>
                <div className={styles.headerActions}>
                    <Link className={styles.loginBar} href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
                        </svg>
                        <span>Вхід / Реєстрація</span>
                    </Link>
                    <Link className={styles.cartBar} href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                        </svg>
                        <span>{count}</span>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Header;
