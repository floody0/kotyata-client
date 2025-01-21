import React from "react";
import styles from "./Footer.module.css";
import Container from "../Container/Container";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className={styles.footer}>
            <Container className={styles.footerContainer}>
                <div className={styles.line}></div>
                    <div className={styles.footerInfo}>
                        <div className={styles.contactInfo}>
                            <div className={styles.logo}>
                                <Image
                                    className={styles.logoImage}
                                    src="/assets/footer-logo.png"
                                    alt="logo"
                                    width={53}
                                    height={88}
                                />
                                <h1 className={styles.logoTitle}>
                                    Kotyata Shop
                                </h1>
                            </div>
                            <div className={styles.contacts}>
                                <div className={styles.mailTo}>
                                    <Image
                                        className={styles.mailImage}
                                        src="/assets/footer-mail-logo.png"
                                        alt="mail"
                                        width={28}
                                        height={22}
                                    />
                                    <Link
                                        href="mailto:kotyatashop@gmail.com"
                                        className={styles.footerText}
                                    >
                                        kotyatashop@gmail.com
                                    </Link>
                                </div>
                                <div className={styles.telTo}>
                                    <Image
                                        className={styles.telImage}
                                        src="/assets/footer-tel-logo.png"
                                        alt="tel"
                                        width={24}
                                        height={23}
                                    />
                                    <Link
                                        href="telto:+380738825113"
                                        className={styles.footerText}
                                    >
                                        + 380 (73) 882 51 13
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footerNavigation}>
                            <div className={styles.footerSections}>
                                <h4 className={styles.sectionTitle}>Розділи сайту</h4>
                                <Link href="/" className={styles.sectionItem}>Головна</Link>
                                <Link href="/products" className={styles.sectionItem}>Каталог</Link>
                                <Link href="/" className={styles.sectionItem}>Про нас</Link>
                            </div>
                            <div className={styles.footerSections}>
                                <h4 className={styles.sectionTitle}>Інформація</h4>
                                <Link href="/" className={styles.sectionItem}>Умови та положення</Link>
                                <Link href="/" className={styles.sectionItem}>Політика конфіденційності</Link>
                            </div>
                        </div>
                    </div>
                    <span className={styles.footerText} style={{cursor: 'default'}}>© 2023 KotyataShop.  Всі права захищені.</span>
            </Container>
        </div>
    );
};

export default Footer;
