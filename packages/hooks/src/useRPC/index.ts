import { useEffect } from 'react';
import useZustand from 'react-use-zustand';

import { IProps, IStore } from './interfaces';

const broadcastStore = useZustand<IStore>({
    keys: ['broadcasts'],
});

function useRPC(props: IProps) {
    const { disabled, events, currentModule } = props || {};

    const broadcasts = broadcastStore.use.broadcasts();

    const init = (channelName?: string) => {
        console.log('init broadcast', currentModule);
        broadcasts.set({ ...broadcasts.value, [currentModule]: new BroadcastChannel(channelName || 'main_channel') });
    };

    const send = <E, P>(event: E, payload: P, targets: Array<string> = []) => {
        console.log(currentModule);
        console.log(broadcasts.value);
        console.log(broadcasts.value[currentModule]);

        if (broadcasts.value) {
            if (broadcasts.value[currentModule]) {
                console.log('send', event, currentModule);
                broadcasts.value[currentModule].postMessage(JSON.stringify({ from: currentModule, event, payload, targets }));
            }
        }
    };

    useEffect(() => {
        if (broadcasts.value && events) {
            if (broadcasts.value[currentModule]) {
                broadcasts.value[currentModule].onmessage = (e) => {
                    const parse = JSON.parse(e.data);
                    console.log('parse', parse);

                    if (!parse.targets.length || parse.targets.includes(currentModule)) {
                        if (events[parse.event]) {
                            events[parse.event].event(parse.payload, parse.from);
                        }
                    }
                };
            }
        }
    }, []);

    const close = () => {
        if (broadcasts.value) {
            if (broadcasts.value[currentModule]) {
                broadcasts.value[currentModule].close();
            }
        }
    };

    return { init, send, close };
}

export default useRPC;
