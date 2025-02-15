import React from "react";
import styles from "./About.module.css";
import { Container } from "@/components";
import Image from "next/image";

type Props = {};

const AboutPage = (props: Props) => {
    return (
        <div className={styles.aboutPage}>
            <Container className={styles.aboutPageContainer}>
                <div className={styles.aboutPageTitle}>
                    <h1 className={styles.pageTitle}>Про нас</h1>
                    <p className={styles.pageSubTitle}>
                        Як ми створили магазин для котів
                    </p>
                </div>
                <div className={styles.historyBlock}>
                    <h4 className={styles.historyTitle}>
                        Від Харкова до Німеччини: Історія магазину
                    </h4>
                    <div className={styles.historySection}>
                        <p className={styles.historySectionText}>
                            Протягом останніх трьох років я рятую кошенят. З
                            дитинства я завжди почувала особливу прив'язаність
                            до котів та ніколи не могла пройти повз. На даний
                            момент кількість врятованих кошенят перебільшує 100
                            маленьких життів.
                            <br></br>
                            <br></br>
                            Волонтерство стало для мене життєвим покликанням.
                            Навіть коли це було важко, коли я стикалася з
                            викликами і труднощами, ніколи не зупинялася.
                            Бачити, як ці кошенята живуть щасливо в родинах,
                            додає мені сили і натхнення.
                        </p>
                        <Image
                            src="/assets/about-story-img-1.png"
                            alt="about-story-img-1"
                            width={390}
                            height={440}
                            className={styles.historySectionImage}
                        />
                    </div>
                    <div className={styles.catTeamGroup}>
                        <h4 className={styles.catTeamGroupTitle}>
                            Моя Котокоманда
                        </h4>
                        <div className={styles.catTeamGroupList}>
                            <div className={styles.catTeamGroupItem}>
                                <Image
                                    src="/assets/cat-team-group-img-Cassiopeia.png"
                                    alt="cat-team-group-img-Cassiopeia"
                                    width={270}
                                    height={360}
                                    className={styles.catTeamGroupImage}
                                />
                                <h5 className={styles.catTeamGroupTitle}>
                                    Кассіопея
                                </h5>
                            </div>
                            <div className={styles.catTeamGroupItem}>
                                <Image
                                    src="/assets/cat-team-group-img-Tokyo.png"
                                    alt="cat-team-group-img-Tokyo"
                                    width={270}
                                    height={360}
                                    className={styles.catTeamGroupImage}
                                />
                                <h5 className={styles.catTeamGroupTitle}>
                                    Токіо
                                </h5>
                            </div>
                            <div className={styles.catTeamGroupItem}>
                                <Image
                                    src="/assets/cat-team-group-img-Alisa.png"
                                    alt="cat-team-group-img-Alisa"
                                    width={270}
                                    height={360}
                                    className={styles.catTeamGroupImage}
                                />
                                <h5 className={styles.catTeamGroupTitle}>
                                    Аліса
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.historySection}>
                        <Image
                            src="/assets/about-story-img-2.png"
                            alt="about-story-img-2"
                            width={390}
                            height={440}
                            className={styles.historySectionImage}
                        />
                        <p className={styles.historySectionText}>
                            Але це було лише початком нашої довгої подорожі.
                            Війна змусила нас залишити Харків і виїхати до
                            Німеччини. Разом із нами їхали не лише наші тварини,
                            але й ті хвостики, які на той час були в мене на
                            кураторстві.
                            <br></br>
                            <br></br>З початку нашого перебування в іншій країні
                            я стала відкривати для себе асортимент німецьких
                            зоомагазинів, який суттєво відрізняється від того,
                            що ми бачимо на полицях наших зоомагазинів.
                            Знайомство з їхніми фірмами та товарами призвело до
                            багатьох захоплюючих відкриттів.
                        </p>
                    </div>
                    <div className={styles.historySection}>
                        <p className={styles.historySectionText}>
                            Від цього моменту у мене виникла ідея створити
                            магазин іграшок для кішок, який дав би змогу і
                            українським котикам насолоджуватися якісними
                            товарами. Запити від друзів та моїх підписників
                            стали джерелом натхнення. Я ретельно відбираю корм і
                            смаколики за складом та тестую іграшки на своїх
                            власних кішках.
                        </p>
                        <Image
                            src="/assets/about-story-img-3.png"
                            alt="about-story-img-3"
                            width={390}
                            height={440}
                            className={styles.historySectionImage}
                        />
                    </div>
                </div>
                <div className={styles.joinUsBlock}>
                    <h4 className={styles.joinUsTitle}>Приєднується до нас</h4>
                    <div className={styles.sloganGroup}>
                        <h2 className={styles.sloganTitle}>
                            Щасливі кішки - щасливе життя
                        </h2>
                        <p className={styles.sloganText}>
                            Всі товари у нашому магазині - це результат безмежної
                            любові та турботи. Ми віримо, що щасливі кішки - це
                            щасливі власники. Кожен елемент у нашому асортименті
                            допомагає зробити кішку щасливішою, здоровішою та
                            активнішою.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutPage;
