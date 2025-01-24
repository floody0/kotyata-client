import { IProductsOption } from "@/models/productsOption.inteface";
import React from "react";
import Select from "react-select";
import styles from "./MySelect.module.css";

interface Props {
    className?: string,
    sortQuerry: string,
    setSortQuerry: (value: string) => void,
    options: IProductsOption[],
};

const MySelect = (props: Props) => {

    const getValue = () => {
        return props.options.find((option) => option.value === props.sortQuerry) || null;
    };

    const onChange = (newValue: IProductsOption | null) => {
        if (newValue) {
            props.setSortQuerry(newValue.value);
        }
    };
    return (
        <Select<IProductsOption>
            className={`${styles.mySelect} ${props.className || ""}`}
            classNamePrefix={'mySelect'}
            options={props.options}
            value={getValue()}
            onChange={onChange}
            isSearchable={false}
            instanceId={"sort"}
        />
    );
};

export default MySelect;
