export interface Category {
    id: number;
    title: string;
    parentId: number | null;
    note: string;
    children: Category[];
}
