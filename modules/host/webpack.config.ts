import { configuration, defaultPaths, IEnvVariables } from '@packages/webpack';

import packageJson from './package.json';

export default (env: IEnvVariables) => {
    const isDev = env.mode ?? 'development';

    return configuration({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths: {
            publicPathForNginx: '/',
            ...defaultPaths(__dirname),
        },
        analyzer: env.analyzer,
        version: packageJson.version,
        moduleFederations: {
            name: packageJson.name,
            filename: 'remoteEntry.js',
            remotes: {
                map: isDev ? `map@http://localhost/map/remoteEntry.js` : '',
            },
            shared: {
                ...packageJson.dependencies,
            },
        },
    });
};
