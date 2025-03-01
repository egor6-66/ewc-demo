function proxy(server: any) {
    const prefix = server.prefix;
    const postfix4prefix = server.postfix4prefix;
    const ws = !!server.ws;
    const target = new URL(server.target);

    function makeNextPath(target: URL, path: string): string {
        let next = target.origin;

        if (target.pathname !== '/') {
            if (next.endsWith('/') && target.pathname.startsWith('/')) {
                next += target.pathname.slice(1, target.pathname.length);
            } else {
                next += target.pathname;
            }
        }

        if (path.length > 0) {
            if (next.endsWith('/') && path.startsWith('/')) {
                next += path.slice(1, path.length);
            } else if (!next.endsWith('/') && !path.startsWith('/')) {
                next += '/' + path;
            } else {
                next += path;
            }
        }

        return next;
    }

    return {
        context: postfix4prefix ? prefix + postfix4prefix : prefix,
        target: target.origin,
        secure: false,
        changeOrigin: true,
        ws: ws,
        pathRewrite: function (actualPath: any, req: any) {
            const path = actualPath.slice(prefix.length);

            return makeNextPath(target, path);
        },
    };
}

export default proxy;
