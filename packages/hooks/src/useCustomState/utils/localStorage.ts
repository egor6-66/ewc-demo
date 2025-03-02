const LocalStorage = {
    get(key: string) {
        const value = window.localStorage.getItem(key);

        return JSON.parse(value);
    },

    set<T>(key: string, data: T) {
        console.log('state', data);
        window.localStorage.setItem(key, JSON.stringify(data));
    },
};

export default LocalStorage;
