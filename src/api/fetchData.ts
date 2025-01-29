export async function fetchData<T>(
    endpoint: string,
    params?: Record<string, any>,
    cache: RequestCache = "no-store"
): Promise<T> {
    const queryParams = params
        ? `?${new URLSearchParams(
              Object.entries(params).reduce((acc, [key, value]) => {
                  acc[key] = Array.isArray(value) ? JSON.stringify(value) : value.toString();
                  return acc;
              }, {} as Record<string, string>)
          )}`
        : "";

    const response = await fetch(`http://localhost:5000${endpoint}${queryParams}`, {
        cache,
    });

    if (!response.ok) {
        throw new Error(`Ошибка при запросе к ${endpoint}: ${response.statusText}`);
    }

    return response.json();
}
