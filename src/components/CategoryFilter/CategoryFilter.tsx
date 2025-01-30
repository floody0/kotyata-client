import React, { FC, useState } from "react";
import styles from "./CategoryFilter.module.css";
import { MyButton, MyCheckbox } from "@/UI";
import { Category } from "@/models";
import Image from "next/image";

type CategoryFilterProps = {
    categories: Category[];
    onChange: (selectedIds: number[]) => void;
};

const CategoryFilter: FC<CategoryFilterProps> = ({ categories, onChange }) => {
    const [expanded, setExpanded] = useState<number[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleCheckboxChange = (
        id: number,
        checked: boolean,
        children: Category[]
    ) => {
        let updatedSelectedIds = new Set(selectedIds);

        if (checked) {
            updatedSelectedIds.add(id);
            children?.forEach((child) =>
                getAllChildIds(child).forEach((childId) =>
                    updatedSelectedIds.add(childId)
                )
            );
        } else {
            updatedSelectedIds.delete(id);
            children?.forEach((child) =>
                getAllChildIds(child).forEach((childId) =>
                    updatedSelectedIds.delete(childId)
                )
            );
        }

        setParentSelection(id, categories, updatedSelectedIds);
        const result = Array.from(updatedSelectedIds);
        setSelectedIds(result);
        onChange(result);
    };

    const setParentSelection = (
        id: number,
        categories: Category[],
        selectedIds: Set<number>
    ) => {
        const parent = findParent(id, categories);
        if (parent) {
            const allChildrenSelected = parent.children.every((child) =>
                selectedIds.has(child.id)
            );
            allChildrenSelected
                ? selectedIds.add(parent.id)
                : selectedIds.delete(parent.id);
            setParentSelection(parent.id, categories, selectedIds);
        }
    };

    const findParent = (
        id: number,
        categories: Category[]
    ): Category | null => {
        for (const category of categories) {
            if (category.children.some((child) => child.id === id))
                return category;
            const parent = findParent(id, category.children);
            if (parent) return parent;
        }
        return null;
    };

    const getAllChildIds = (category: Category): number[] => {
        return [category.id, ...category.children.flatMap(getAllChildIds)];
    };

    const toggleExpand = (id: number) => {
        setExpanded((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const renderCategories = (categories: Category[]) => {
        return categories.map((category) => {
            const isExpanded = expanded.includes(category.id);

            return (
                <div key={category.id} className={styles.categoryItem}>
                    <div className={styles.categoryHeader}>
                        <MyCheckbox
                            checked={selectedIds.includes(category.id)}
                            onChange={(checked) =>
                                handleCheckboxChange(
                                    category.id,
                                    checked,
                                    category.children
                                )
                            }
                            label={category.title}
                        />
                        {category.children?.length > 0 && (
                            <MyButton
                                className={`${styles.expandButton} ${
                                    isExpanded ? styles.active : ""
                                }`}
                                onClick={() => toggleExpand(category.id)}
                            >
                                <Image
                                    src="/assets/vector-select-arrow.png"
                                    alt="Arrow"
                                    width={12}
                                    height={8}
                                />
                            </MyButton>
                        )}
                    </div>
                    {isExpanded && category.children?.length > 0 && (
                        <div className={styles.subcategories}>
                            {renderCategories(category.children)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Категорії</h3>
            <div className={styles.categories}>
                {renderCategories(categories)}
            </div>
        </div>
    );
};

export default CategoryFilter;
