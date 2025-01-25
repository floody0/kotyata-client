import { IProductsOption } from "@/models/productsOption.inteface";
import React, { useEffect } from "react";
import Select from "react-select";
import styles from "./MySelect.module.css";

interface Props {
    className?: string;
    sortQuery: string;
    setSortQuery: (value: string) => void;
    options: IProductsOption[];
}

const MySelect = (props: Props) => {
    // Устанавливаем начальное значение sortQuery при монтировании
    useEffect(() => {
        const initialValue = getValue();
        if (initialValue) {
            props.setSortQuery(initialValue.value);
        }
    }, []); // Выполняется один раз при монтировании

    // Находим текущий выбранный вариант
    const getValue = () => {
        return props.options.find((option) => option.value === props.sortQuery) || null;
    };

    // Обрабатываем изменение значения
    const onChange = (newValue: IProductsOption | null) => {
        if (newValue) {
            props.setSortQuery(newValue.value); // Устанавливаем новое значение
        }
    };

    return (
        <Select<IProductsOption>
            className={`${styles.mySelect} ${props.className || ""}`}
            classNamePrefix={"mySelect"}
            options={props.options}
            value={getValue()} // Устанавливаем текущее значение
            onChange={onChange}
            isSearchable={false} // Отключаем поиск, если не нужен
            instanceId={"sort"}
        />
    );
};

export default MySelect;
