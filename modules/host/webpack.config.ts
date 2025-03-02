import { configuration, defaultPaths, IEnvVariables } from '@packages/webpack';
import path from 'path';

import proxy from './configs/proxy';
import packageJson from './package.json';

export default (env: IEnvVariables) => {
    return configuration({
        mode: env.mode ?? 'development',
        paths: {
            static: '/',
            ...defaultPaths(__dirname),
        },
        devServer: {
            active: env.devServer,
            port: env.port ?? 3000,
            proxy: proxy('http://172.16.211.136:8080/EmergencyServer'),
        },
        analyzer: env.analyzer,
        version: packageJson.version,
        moduleFederations: {
            name: packageJson.name,
            filename: 'remoteEntry.js',
            remotes: {
                card: 'card@http://localhost/map/remoteEntry.js',
            },
            shared: {
                ...packageJson.dependencies,
            },
        },
        aliases: {
            '@': path.resolve('src'),
            styleUtilities: path.resolve('src', 'shared', 'styles'),
        },
    });
};
