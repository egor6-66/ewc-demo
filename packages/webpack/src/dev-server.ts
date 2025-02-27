import path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { IBuildOptions } from './types';

export function devServer(options: IBuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        https: true,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            webSocketURL: 'auto://0.0.0.0:0/ws',
        },
        proxy: [
            ...(
                [
                    ...makeESProxy(
                        'http://172.16.211.136:8080/EmergencyServer' // dev zone
                    ),
                    { prefix: '/call_records', target: 'http://172.16.211.135:8867/call_records' },
                    { prefix: '/logger', target: 'http://172.16.211.135:33333' },
                    { prefix: '/export', target: 'http://172.16.211.131:19906/export' }, // spb maps dev zone
                ] ?? []
            ).map(makeHttpProxy),
        ],
    };
}

function makeESProxy(target: string) {
    return [
        // eslint-disable-next-line sonarjs/no-duplicate-string
        { prefix: '/es4', target: target, postfix4prefix: '/notifications', ws: true },
        { prefix: '/es4', target: target },
        { prefix: '/es3', target: target, postfix4prefix: '/notifications', ws: true },
        { prefix: '/es3', target: target },
        { prefix: '/es2', target: target, postfix4prefix: '/notifications', ws: true },
        { prefix: '/es2', target: target },
        { prefix: '/es1', target: target, postfix4prefix: '/notifications', ws: true },
        { prefix: '/es1', target: target },
        { prefix: '/es', target: target, postfix4prefix: '/notifications', ws: true },
        { prefix: '/es', target: target },
    ];
}

function makeHttpProxy(server: any) {
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
