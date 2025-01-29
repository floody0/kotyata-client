import React, { FC } from "react";
import { MyInput, MyRangebar } from "@/UI";
import styles from "./PriceFilter.module.css";

interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (value: number) => void;
    setMaxPrice: (value: number) => void;
    handleSearch: () => void;
    minLimit: number;
    maxLimit: number;
}

const PriceFilter:FC<PriceFilterProps> = ({
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    handleSearch,
    minLimit,
    maxLimit,
}) => {
    return (
        <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Ціна</h3>
            <div className={styles.priceValues}>
                <div className={styles.priceValue}>
                    Від
                    <MyInput
                        className={styles.priceInput}
                        type="number"
                        value={minPrice.toString()}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        onBlur={handleSearch}
                    />
                </div>
                <div className={styles.priceValue}>
                    До
                    <MyInput
                        className={styles.priceInput}
                        type="number"
                        value={maxPrice.toString()}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        onBlur={handleSearch}
                    />
                </div>
            </div>
            <MyRangebar
                setMin={setMinPrice}
                setMax={setMaxPrice}
                minLimit={minLimit}
                maxLimit={maxLimit}
                min={minPrice}
                max={maxPrice}
                step={1}
                onRangeDragEnd={handleSearch}
            />
        </div>
    );
};

export default PriceFilter;
