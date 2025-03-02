import { PropsWithChildren, useEffect } from 'react';
import { useRPC } from '@packages/hooks';

const InitProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const rpc = useRPC({ currentModule: 'HOST' });

    useEffect(() => {
        rpc.init();

        return () => {
            rpc.close();
        };
    }, []);

    return children;
};

export default InitProvider;
