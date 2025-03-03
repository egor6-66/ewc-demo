import { useEffect } from 'react';
import useZustand from 'react-use-zustand';

import { IProps, ISendProps, IStore } from './interfaces';

const broadcastStore = useZustand<IStore>({
    keys: ['broadcasts'],
});

function useModule<T extends string>(moduleName: T, props?: IProps) {
    const broadcasts = broadcastStore.use.broadcasts();

    const checkStandalone = () => {
        return window.location.pathname.split('/')[1] === moduleName.toLowerCase();
    };

    const init = () => {
        console.log(`INITIAL ${moduleName} MODULE`);
        const bc = new BroadcastChannel(`${moduleName}_channel`);
        broadcasts.set((prev) => ({ ...prev, [moduleName]: bc }));
    };

    const send = <M>(props: ISendProps<M>) => {
        return new Promise((resolve, reject) => {
            const { target, eventName, data, waitingTimer } = props;
            const bc = new BroadcastChannel(`${target}_channel`);
            bc.postMessage(JSON.stringify({ eventName, data: data || {}, from: moduleName }));

            const timer = setTimeout(() => {
                reject('no answer');
                bc.close();
            }, waitingTimer || 1000);

            bc.addEventListener(
                'message',
                (e) => {
                    const parse = JSON.parse(e.data);

                    if (parse.eventName === eventName) {
                        clearTimeout(timer);
                        resolve(parse.data);
                        bc.close();
                    }
                },
                { once: true }
            );
        });
    };

    useEffect(() => {
        if (broadcasts.value && broadcasts.value[moduleName]) {
            const currentBroadcast = broadcasts.value[moduleName];

            const listener = (e: any) => {
                const parse = JSON.parse(e.data);

                if (parse.eventName === 'checkStandalone') {
                    return currentBroadcast.postMessage(JSON.stringify({ eventName: parse.eventName, data: { standalone: checkStandalone() } }));
                }

                if (props?.events && props?.events[parse.eventName]) {
                    const res = props.events[parse.eventName](parse.data, parse.from);
                    currentBroadcast.postMessage(JSON.stringify({ eventName: parse.eventName, data: res, answer: true }));
                }
            };

            currentBroadcast.addEventListener('message', listener);

            return () => {
                currentBroadcast.removeEventListener('message', listener);
            };
        }
    }, [broadcasts.value]);

    const close = () => {
        if (broadcasts?.value[moduleName]) {
            broadcasts?.value[moduleName].close();
        }
    };

    return { init, close, send, checkStandalone, broadcasts };
}

export default useModule;
