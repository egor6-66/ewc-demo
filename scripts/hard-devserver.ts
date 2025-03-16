import { execSync } from 'child_process';
import * as fs from 'fs';
import path from 'path';

import smdArgs from './utils/smd-args';

interface IArgs {
    mode: 'prod' | 'dev';
}

function run() {
    const args = smdArgs<IArgs>();
    const modulesDir = path.resolve('modules');
    let fsTimeout: any = null;
    fs.watch(modulesDir, { recursive: true, encoding: 'utf8' }, (event, filename) => {
        if (filename) {
            const pathArr = filename.split(path.sep);

            if (!fsTimeout && pathArr[1] !== 'builds') {
                fsTimeout = setTimeout(function () {
                    fsTimeout = null;
                }, 1000);
                const module = path.join(modulesDir, pathArr[0]);
                const stat = execSync(`cd ${module} && npm run build:${args.mode || 'dev'}`);
                console.log(stat);
            }
        }
    });
    const stat = execSync(`npm run docker:watcher`);
    console.log(stat);
}

run();
