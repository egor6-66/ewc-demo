import { useEffect, useRef, useState } from 'react';
import useZustand from 'react-use-zustand';

import { IStore } from './interfaces';

const broadcastStore = useZustand<IStore>({
    keys: ['broadcasts', 'module'],
});

function useModule(props?: any) {
    const broadcasts = broadcastStore.use.broadcasts();
    const module = broadcastStore.use.module();

    const init = <T extends string>(moduleName: T) => {
        const bc = new BroadcastChannel(`${moduleName}_channel`);
        broadcasts.set((prev) => ({ ...prev, [moduleName]: bc }));
        module.set(moduleName);
        bc();
    };

    const send = <M>(target: M, event: string, data: any, callback: (data: any) => void) => {
        const bc = new BroadcastChannel(`${target}_channel`);
        bc.postMessage(JSON.stringify({ event, data }));

        if (callback) {
            bc.addEventListener('message', (e) => {
                const parse = JSON.parse(e.data);

                if (parse.event === event) {
                    callback(e.data);
                    bc.close();
                }
            });
        } else {
            bc.close();
        }
    };

    useEffect(() => {
        if (props?.events && broadcasts.value) {
            const currentBc = broadcasts.value;

            const listener = (e: any) => {
                const parse = JSON.parse(e.data);
                console.log('list', parse);
            };

            broadcast.value.addEventListener('message', listener);

            return () => {
                broadcast.value.removeEventListener('message', listener);
            };
        }
    }, []);

    const close = () => {
        if (broadcast.value) {
            broadcast.value.close();
        }
    };

    return { init, close, send };
}

export default useModule;
