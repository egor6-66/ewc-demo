import { configuration, defaultPaths, IEnvVariables } from '@packages/webpack';
import proxy from 'map/configs/proxy';
import path from 'path';

import packageJson from './package.json';

export default (env: IEnvVariables) =>
    configuration({
        mode: env.mode ?? 'development',
        paths: {
            static: env.devServer ? '/' : '/map',
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
            exposes: {
                './Card': './src/app/index.tsx',
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
