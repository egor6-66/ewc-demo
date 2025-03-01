function proxy(target: string) {
    const postfix4prefix = '/notifications';

    return [
        { prefix: '/es4', target: target, postfix4prefix, ws: true },
        { prefix: '/es4', target: target },
        { prefix: '/es3', target: target, postfix4prefix, ws: true },
        { prefix: '/es3', target: target },
        { prefix: '/es2', target: target, postfix4prefix, ws: true },
        { prefix: '/es2', target: target },
        { prefix: '/es1', target: target, postfix4prefix, ws: true },
        { prefix: '/es1', target: target },
        { prefix: '/es', target: target, postfix4prefix, ws: true },
        { prefix: '/es', target: target },
        { prefix: '/call_records', target: 'http://172.16.211.135:8867/call_records' },
        { prefix: '/logger', target: 'http://172.16.211.135:33333' },
        { prefix: '/export', target: 'http://172.16.211.131:19906/export' },
    ];
}

export default proxy;
