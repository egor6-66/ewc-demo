import useZustand from 'react-use-zustand';

import { IStore } from './interfaces';

const broadcastStore = useZustand<IStore>({
    keys: ['broadcast'],
});

function useBroadcast() {
    const broadcast = broadcastStore.use.broadcast();

    const init = (channelName: string) => {
        broadcast.set(new BroadcastChannel(channelName));
    };

    const send = <E, P>(event: E, payload: P) => {
        broadcast.value.postMessage(JSON.stringify({ event, payload }));
    };

    const listener = <E, P>(event: E, cb: (payload: P) => void) => {
        broadcast.value.onmessage = (e) => {
            const parse = JSON.parse(e.data);

            if (parse.data.event === event) {
                cb(parse.payload);
            }
        };
    };

    const close = () => {
        broadcast.value.close();
    };

    return { init, send, listener, close };
}

export default useBroadcast;
