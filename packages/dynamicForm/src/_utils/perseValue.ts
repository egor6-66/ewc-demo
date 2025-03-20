function parseValue(value: string) {
    if (value?.includes('link$')) {
        // const ev = eval(value.split('$')[1]);

        return value.split('$')[1];
        // if (typeof ev === 'function') {
        //     return ev();
        // }
    }

    if (value === 'true' || value === 'false') {
        return value === 'true';
    }

    return value;
}

export default parseValue;
