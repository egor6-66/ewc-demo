export type BuildMode = 'production' | 'development';

export interface IEnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
}

export interface IBuildPaths {
    publicPathForNginx?: string;
    entry: string;
    html: string;
    public: string;
    output: string;
    src: string;
}

interface ISharedConfig {
    eager?: boolean;
    import?: string | false;
    packageName?: string;
    requiredVersion?: string | false;
    shareKey?: string;
    shareScope?: string;
    singleton?: boolean;
    strictVersion?: boolean;
    version?: string | false;
}

interface ISharedObject {
    [index: string]: string | ISharedConfig;
}

export interface IModuleFederations {
    name: string;
    filename: string;
    remotes?: Record<string, string>;
    exposes?: Record<string, string>;
    shared?: (string | ISharedObject)[] | ISharedObject;
    fallback?: Record<string, string>;
}

export interface IDevServer {
    port: number;
    proxy?: Array<{ prefix: string; target: string; postfix4prefix?: string; ws?: boolean }>;
}

export interface IBuildOptions {
    paths: IBuildPaths;
    mode: BuildMode;
    version: string;
    analyzer?: boolean;
    devServer?: IDevServer;
    moduleFederations?: IModuleFederations;
}
