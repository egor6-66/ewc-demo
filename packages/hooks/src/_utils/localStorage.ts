export const LocalStorage = {
    get(key: string): any {
        const data = localStorage.getItem(key);

        return data && JSON.parse(data).value;
    },
    set(key: string, value: unknown): any {
        localStorage.setItem(key, JSON.stringify({ value }));
    },
    remove(key: string): any {
        localStorage.removeItem(key);
    },
};
