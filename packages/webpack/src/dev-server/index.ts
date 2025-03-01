import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { IDevServer } from '../types';

import proxy from './proxy';

export function devServer(options: IDevServer): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        https: true,
        open: true,
        historyApiFallback: true,
        hot: true,
        proxy: options.proxy?.map(proxy) || [],
    };
}
