import Link from "next/link";
import styles from "./page.module.css";
import { Container, CustomSwiper} from "@/components";
import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import MyButton from "@/UI/MyButton/MyButton";

export default function Home() {

    const products = [
        {
            id: 1,
            title: "Фонтан Catit PIXI - рожевий",
            description: "",
            normalPrice: 250,
            sellPrice: 199,
            isInStock: true,
            note: "",
            categories: [],
            photos: ["/assets/product-img.png"],
        },
        {
            id: 2,
            title: "Фонтан Catit PIXI - рожевий",
            description: "",
            normalPrice: 250,
            sellPrice: 199,
            isInStock: true,
            note: "",
            categories: [],
            photos: ["/assets/product-img.png"],
        },
        {
            id: 3,
            title: "Фонтан Catit PIXI - рожевий",
            description: "",
            normalPrice: 250,
            sellPrice: 199,
            isInStock: true,
            note: "",
            categories: [],
            photos: ["/assets/product-img.png"],
        },
        {
            id: 4,
            title: "Фонтан Catit PIXI - рожевий",
            description: "",
            normalPrice: 250,
            sellPrice: 199,
            isInStock: true,
            note: "",
            categories: [],
            photos: ["/assets/product-img.png"],
        },
    ];

    return (
        <div className={styles.homePage}>
            <Container className={styles.homeContainer}>
                {/* <CustomSwiper
                    className={styles.swiper}
                    slides={[
                        { img: "/assets/swiper-slide-1.png", alt: "slide 1" },
                        { img: "/assets/swiper-slide-1.png", alt: "slide 2" },
                        { img: "/assets/swiper-slide-1.png", alt: "slide 3" },
                        { img: "/assets/swiper-slide-1.png", alt: "slide 4" },
                    ]}
                /> */}
                <div className={styles.productsBlock}>
                    <h2 className={styles.blockTitle}>Продукція</h2>
                    <h3 className={styles.blockDescription}>
                        Замовте зараз унікальні товар, які не знайдете на
                        полицях звичайних зоомагазинів
                    </h3>
                    <div className={styles.productsList}>
                        {/* {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))} */}
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <h2 className={styles.blockTitle}>
                        Дбаємо про ваших малюків
                    </h2>
                    <h3 className={styles.blockDescription}>
                        Ми докладаємо особливої уваги догляду за вашими
                        маленькими улюбленцями.
                    </h3>
                    <div className={styles.infoSection}>
                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.itemIcon}>
                                    <Image
                                        src="/assets/home-info-item-home.png"
                                        alt="home icon"
                                        width={33}
                                        height={33}
                                    />
                                </div>
                                <div className={styles.itemText}>
                                    <h4 className={styles.itemTitle}>
                                        Широкий асортимент
                                    </h4>
                                    <p className={styles.itemDescription}>
                                        Великий вибір кормів та аксесуарів для
                                        котиків будь-якого віку, задовольняючи
                                        унікальні потреби кожного пухнастика.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.itemIcon}>
                                    <Image
                                        src="/assets/home-info-item-heart.png"
                                        alt="home icon"
                                        width={25}
                                        height={23}
                                    />
                                </div>
                                <div className={styles.itemText}>
                                    <h4 className={styles.itemTitle}>
                                        Висока якість
                                    </h4>
                                    <p className={styles.itemDescription}>
                                        Наші продукти обираються з ретельним
                                        контролем якості, гарантуючи, що ваші
                                        мурчики отримають тільки найкраще.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.itemIcon}>
                                    <Image
                                        src="/assets/home-info-item-delivery.png"
                                        alt="home icon"
                                        width={28}
                                        height={21}
                                    />
                                </div>
                                <div className={styles.itemText}>
                                    <h4 className={styles.itemTitle}>
                                        Зручна доставка
                                    </h4>
                                    <p className={styles.itemDescription}>
                                        Ми пропонуємо швидку та надійну доставку
                                        по всій Україні сервісами Нова пошта,
                                        Укрпрошта.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/assets/home-info-img.png"
                            className={styles.infoImg}
                            alt="info img"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                <div className={styles.historyBlock}>
                    <Image
                        src="/assets/home-history-collage.png"    
                        className={styles.historyImg}
                        alt="history collage"
                        width={430}
                        height={390}
                    />
                    <div className={styles.historySection}>
                        <div className={styles.blockTitle}>
                            Історія Магазину
                        </div>
                        <div className={styles.itemDescription}>
                            Ідея створення магазину прийшла під час вимушеної
                            подорожі до Німеччини. Наші товари - це результат
                            дбайливого відбору за складом та якістю. З кожного
                            продажу ми маємо можливість рятувати вуличних
                            котиків та знаходити їм найкращі родини.
                        </div>
                        <MyButton className={styles.historyButton}>Детальніше</MyButton>
                    </div>
                </div>
            </Container>
        </div>
    );
}
