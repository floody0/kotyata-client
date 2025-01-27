import { IProductsOption } from "@/models/productsOption.inteface";

export const productsSortOptions: IProductsOption[] = [
        {
            value: 'PRICE_ASC',
            label: 'Від дешевих до дорогих',
        },
        {
            value: 'PRICE_DESC',
            label: 'Від дорогих до дешевих',
        },
        {
            value: 'NEWEST',
            label: 'Новинки',
        },
    ];
