export const handleFilters = (filters: { [key: string]: string  }) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const query = Object.fromEntries(
        Object.entries(filters).filter(([value]) => value.trim() !== '')

    );
    const hasChanges = Object.keys(query).some(
        (key) => query[key] !== currentSearchParams.get(key)
    );
    if (!hasChanges) return;

    const queryString = new URLSearchParams(query as Record<string, string>).toString();
    const newPath = queryString ? `/products?${queryString}` : '/products';
    window.history.pushState(null, '', newPath);
};