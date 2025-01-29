import { fetchData } from "../api/fetchData";
import { Category } from "@/models";

export async function fetchCategories() {
    return fetchData<Category[]>("/categories");
}
