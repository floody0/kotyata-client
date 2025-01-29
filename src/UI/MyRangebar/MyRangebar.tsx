import React, { FC } from 'react'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styles from "./MyRangebar.module.css"

interface RangebarProps {
    min: number;
    max: number;
    setMin: (value: number) => void;
    setMax: (value: number) => void;
    minLimit?: number;
    maxLimit?: number;
    step?: number;
    onRangeDragEnd?: () => void
}

const MyRangebar:FC<RangebarProps> = ({min, max, setMin, setMax, step=10, minLimit = 1000, maxLimit = 10000, onRangeDragEnd}) => {

    const handleChange = ([min, max]: [number, number]) => {
        setMin(min);
        setMax(max);
    };

    return (
        <div className={styles.rangeSliderContainer} onPointerUp={onRangeDragEnd}>
            <RangeSlider
                className={styles.rangeSlider}
                min={minLimit}
                max={maxLimit}
                step={step}
                value={[min, max]}
                onInput={handleChange}
            />
        </div>
    );
};

export default MyRangebar