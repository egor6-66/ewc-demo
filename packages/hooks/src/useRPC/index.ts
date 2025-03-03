import { useEffect, useRef, useState } from 'react';

import { IOptions } from './interfaces';

function useRPC<M>(currentModule: M, props?: IOptions) {
    const { disabled, events } = props || {};

    const broadCast = useRef(new BroadcastChannel('main_channel'));
    const [callbacks, setCallbacks] = useState({});
    // const callbacks = useRef({});

    const send = <E extends string, P>(target: M, event: E, payload: P, callback?: (data: any) => void) => {
        const bc = broadCast.current;

        if (bc) {
            bc.postMessage(JSON.stringify({ from: currentModule, event, payload, target }));

            if (callback) {
                setCallbacks((prev) => ({ ...prev, [`${target}-${event}`]: callback }));
            }
        }
    };

    useEffect(() => {
        const bc = broadCast.current;

        if (bc && events) {
            bc.onmessage = (e) => {
                const parse = JSON.parse(e.data);

                console.log('wadd', callbacks);

                if (!parse?.targets?.length || parse?.targets?.includes(currentModule)) {
                    if (events[parse.event] && !disabled) {
                        const res = events[parse.event](parse.payload, parse.from);
                    }
                }
            };
        }

        return () => {
            if (broadCast.current) {
                broadCast.current.close();
            }
        };
    }, [callbacks]);

    return { send };
}

export default useRPC;
