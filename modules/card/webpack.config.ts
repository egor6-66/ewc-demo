import { configuration, defaultPaths, IEnvVariables } from '@packages/webpack';

import packageJson from './package.json';

export default (env: IEnvVariables) =>
    configuration({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths: {
            publicPathForNginx: '/card',
            ...defaultPaths(__dirname),
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
    });
