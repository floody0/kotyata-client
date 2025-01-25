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
import { useRouter } from 'next/navigation';
interface SeverParams {
  categories?: string,
  minPrice?: string,
  maxPrice?: string,
  sort?: string,
  searchQuery?: string, // Учитываем searchQuery
  page?: string,
  limit?: string,
}
interface ClientProductsPageProps {
    initialProducts: Product[];
    severParams: SeverParams; // Новый пропс для инициализации поискового запроса
}

export default function ClientProductsPage({
    initialProducts,
    severParams,
}: ClientProductsPageProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [hydrated, setHydrated] = useState(false);
    const products = useSelector((state: RootState) => state.products.products); 
    const loading = useSelector((state: RootState) => state.products.loading);


    const router = useRouter();
/*     const { keyword } = router.query ;  */
    console
    const [searchQuery, setSearchQuery] = useState<string>(severParams.searchQuery || ''); 
    const [sortQuery, setSortQuery] = useState<string>(severParams.sort || '');
 

    useEffect(() => {
        if (initialProducts.length > 0) {
            dispatch(setProducts(initialProducts));
        }
        setHydrated(true); 
        console.log(severParams.searchQuery)
        setSearchQuery(severParams.searchQuery || '')
    }, [ initialProducts]);

    const handleFilters = (filters: { [key: string]: string | number | undefined }) => {
      // Текущий маршрут
      const currentSearchParams = new URLSearchParams(window.location.search);
    
      // Удаляем пустые значения из объекта фильтров
      const query = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== undefined && value !== '')
      );
    
      // Сравниваем новый набор параметров с текущими
      const hasChanges = Object.keys(query).some(
        (key) => query[key] !== currentSearchParams.get(key)
      );
    
      // Если параметры не изменились, ничего не делаем
      if (!hasChanges) return;
    
      // Собираем новый маршрут
      const queryString = new URLSearchParams(query as Record<string, string>).toString();
      const newPath = queryString ? `/products?${queryString}` : '/products';
    
      router.push(newPath);
    };
    


    const handleSearch = () =>{
      if (hydrated ) {
   
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

    const options: IProductsOption[] = [
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

    const displayedProducts = hydrated ? products : initialProducts; // Используем initialProducts до гидратации

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
                                    options={options}
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
