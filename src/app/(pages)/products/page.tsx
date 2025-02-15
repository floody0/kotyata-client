import { fetchProducts, FetchProductsParams } from "@/utils/fetchProducts";
import { fetchCategories } from "@/utils/fetchCategories";
import ClientProductsPage from "./Products";

interface ProductsPageProps {
    searchParams: { [key: string]: string | undefined };
}

// Серверный компонент для страницы
export default async function ProductsPage({
    searchParams,
}: ProductsPageProps) {
    const params: FetchProductsParams = {
        searchQuery: searchParams?.keyword || "",
        sort: searchParams?.sort || "NEWEST",
        minPrice: searchParams?.minPrice || "0",
        maxPrice: searchParams?.maxPrice || "1000",
        page: searchParams?.page || "1",
        limit: searchParams?.limit || "6",
        categories: [],
    };

    const [initialProductsResponse, categories] = await Promise.all([
        fetchProducts(params),
        fetchCategories(),
    ]);

    return (
        <ClientProductsPage
            initialProductsResponse={{ ...initialProductsResponse }}
            categories={categories}
            serverParams={{searchQuery: params.searchQuery, sort: params.sort, minPrice: params.minPrice, maxPrice: params.maxPrice, page: params.page, limit: params.limit}}
        />
    );
}
