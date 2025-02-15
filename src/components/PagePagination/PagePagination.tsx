import React, { FC } from "react";
import styles from "./PagePagination.module.css";
import { MyButton } from "@/UI";

type PagePaginationProps = {
    currentPage: number; // Текущая страница
    totalPages: number; // Общее количество страниц
    onPageChange: (page: number) => void; // Callback для изменения страницы
};

const PagePagination: FC<PagePaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageButtons = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <MyButton
                    key={i}
                    className={`${styles.pageButton} ${
                        currentPage === i ? styles.active : ""
                    }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </MyButton>
            );
        }
        return pages;
    };

    return (
        <div className={styles.pagination}>
            <MyButton
                className={styles.pageButton}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >Back
            </MyButton>
            {renderPageButtons()}
            <MyButton
                className={styles.pageButton}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </MyButton>
        </div>
    );
};

export default PagePagination;
