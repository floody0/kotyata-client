'use client';
import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export function useAxios<T = any>() {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (url: string, config?: AxiosRequestConfig) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios(url, config);
            setData(response.data);
        } catch (err: any) {
            setError(
                err.response?.data?.message ||
                    err.message ||
                    "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
}
