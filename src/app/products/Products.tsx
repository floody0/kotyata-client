'use client';

import { useEffect, useState } from 'react';
import { Container, ProductCard } from '@/components';
import { Product } from '@/models/product.interface';
import styles from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchProducts, setProducts } from '@/store/slices/productsSlice';
import { MySearch, MySelect } from '@/UI';
import { IProductsOption } from '@/models/productsOption.inteface';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { productsSortOptions } from '@/constants/sortParams';
import { handleFilters } from '../../helpers/handleFilters';
interface SeverParams {
    categories?: string,
    minPrice?: string,
    maxPrice?: string,
    sort?: string,
    searchQuery?: string,
    page?: string,
    limit?: string,
}
interface ClientProductsPageProps {
    initialProducts: Product[];
    severParams: SeverParams;
}

export default function ClientProductsPage({
    initialProducts,
    severParams,
}: ClientProductsPageProps) {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);
    const loading = useAppSelector((state) => state.products.loading);

    const [hydrated, setHydrated] = useState(false);
    const displayedProducts = hydrated ? products : initialProducts; 

    const [searchQuery, setSearchQuery] = useState<string>(severParams.searchQuery || '');
    const [sortQuery, setSortQuery] = useState<string>(severParams.sort || '');

    useEffect(() => {
        if (initialProducts.length > 0) {
            dispatch(setProducts(initialProducts));
        }
        setHydrated(true);
        setSearchQuery(severParams.searchQuery || '')
    }, [initialProducts]);

    const handleSearch = () => {
        if (hydrated) {
            handleFilters({
                keyword: searchQuery,
                sort: sortQuery,
            });
            
            dispatch(
                fetchProducts({
                    categories: [],
                    minPrice: 0,
                    maxPrice: 1000,
                    sort: sortQuery,
                    searchQuery: searchQuery,
                    page: 1,
                    limit: 10,
                })
            );
        }
    }

    useEffect(() => {
        handleSearch()
    }, [searchQuery, sortQuery]);

    return (
        <div className={styles.productsPage}>
            <div className={styles.poster}>
                <Container className={styles.productsPageContainer}>
                    <h2 className={styles.posterTitle}>Все для Ваших Мурчиків</h2>
                    <p className={styles.posterDiscription}>
                        Відкрийте чудовий каталог з кормами та аксесуарами для вашого малюка.
                    </p>
                </Container>
            </div>
            <Container className={styles.productsPageContainer}>
                <div className={styles.productsSection}>
                    <div className={styles.mainSection}>
                        <div className={styles.sectionTools}>
                            <MySearch
                                className={styles.searchTool}
                                setSearchQuerry={setSearchQuery}
                                value={searchQuery}
                            />
                            <div className={styles.sortTool}>
                                Сортувати:
                                <MySelect
                                    options={productsSortOptions}
                                    sortQuery={sortQuery}
                                    setSortQuery={setSortQuery}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.productsList}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}