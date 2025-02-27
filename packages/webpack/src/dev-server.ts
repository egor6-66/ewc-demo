import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { IBuildOptions } from './types';

export function devServer(options: IBuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            webSocketURL: 'auto://0.0.0.0:0/ws',
        },
    };
}
