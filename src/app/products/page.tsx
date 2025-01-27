import { Product } from '@/models/product.interface';
import ClientProductsPage from './Products';

interface ProductsPageProps {
    searchParams: { [key: string]: string | undefined }; // Для доступа к параметрам из URL
}

// Функция для загрузки данных (SSR)
async function fetchProducts(searchQuery: string,sort:string): Promise<Product[]> {

    const queryParams = new URLSearchParams({
        categories: JSON.stringify([]),
        minPrice: '0',
        maxPrice: '1000',
        sort: sort,
        searchQuery, // Учитываем searchQuery
        page: '1',
        limit: '10',
    }).toString();

    const response = await fetch(`http://localhost:5000/products?${queryParams}`, {
        cache: 'no-store', // Загрузка данных каждый раз
    });

    if (!response.ok) {
        throw new Error('Ошибка загрузки товаров');
    }

    const data = await response.json();
    return data.items;
}

// Серверный компонент для страницы
export default async function ProductsPage({ searchParams }: ProductsPageProps) {
    const searchQuery = searchParams.keyword || ''; // Получаем `keyword` из URL или устанавливаем пустую строку
    const sort = searchParams.sort || 'NEWEST';
    const initialProducts = await fetchProducts(searchQuery,sort);

    return <ClientProductsPage initialProducts={initialProducts} severParams={{searchQuery,sort}} />;
}
