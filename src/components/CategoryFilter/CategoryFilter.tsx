import React, { FC, useState } from "react";
import styles from "./CategoryFilter.module.css";
import { MyCheckbox } from "@/UI";
import { Category } from "@/models";

type CategoryFilterProps = {
    categories: Category[];
    onChange: (selectedIds: number[]) => void;
};

const CategoryFilter: FC<CategoryFilterProps> = ({ categories, onChange }) => {
    const [expanded, setExpanded] = useState<number[]>([]);
    const [selected, setSelected] = useState<number[]>([]);

    const toggleExpand = (id: number) => {
        setExpanded((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleSelect = (id: number, isChecked: boolean, children: Category[]) => {
        let newSelected = [...selected];

        if (isChecked) {
            if (!newSelected.includes(id)) newSelected.push(id);
        } else {
            newSelected = newSelected.filter((item) => item !== id);
        }

        const toggleChildren = (categories: Category[], checked: boolean) => {
            categories.forEach((child) => {
                if (checked) {
                    if (!newSelected.includes(child.id)) newSelected.push(child.id);
                } else {
                    newSelected = newSelected.filter((item) => item !== child.id);
                }
                if (child.children.length > 0) {
                    toggleChildren(child.children, checked);
                }
            });
        };

        toggleChildren(children, isChecked);

        setSelected(newSelected);
        onChange(newSelected);
    };

    const isFullySelected = (category: Category): boolean => {
        if (category.children.length === 0) {
            return selected.includes(category.id);
        }
        return category.children.every((child) => isFullySelected(child));
    };

    const renderCategories = (categories: Category[]) => {
        return categories.map((category) => {
            const isExpanded = expanded.includes(category.id);
            const isChecked = isFullySelected(category);

            return (
                <div key={category.id} className={styles.categoryItem}>
                    <div className={styles.categoryHeader}>
                        <MyCheckbox
                            checked={isChecked}
                            onChange={(checked) =>
                                toggleSelect(category.id, checked, category.children)
                            }
                            label={category.title}
                        />
                        {category.children.length > 0 && (
                            <button
                                className={styles.expandButton}
                                onClick={() => toggleExpand(category.id)}
                            >
                                {isExpanded ? "▲" : "▼"}
                            </button>
                        )}
                    </div>
                    {isExpanded && category.children.length > 0 && (
                        <div className={styles.children}>
                            {renderCategories(category.children)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return <div className={styles.nestedCheckboxList}>{renderCategories(categories)}</div>;
};

export default CategoryFilter;
