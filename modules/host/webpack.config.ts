import { configuration, defaultPaths, IEnvVariables } from '@packages/webpack';

import proxy from './configs/proxy';
import packageJson from './package.json';

export default (env: IEnvVariables) => {
    const isDev = env.mode ?? 'development';

    return configuration({
        mode: env.mode ?? 'development',
        paths: {
            publicPathForNginx: '/',
            ...defaultPaths(__dirname),
        },
        devServer: {
            port: env.port ?? 3000,
            proxy: proxy('http://172.16.211.136:8080/EmergencyServer'),
        },
        analyzer: env.analyzer,
        version: packageJson.version,
        moduleFederations: {
            name: packageJson.name,
            filename: 'remoteEntry.js',
            remotes: {},
            shared: {
                ...packageJson.dependencies,
            },
        },
    });
};
