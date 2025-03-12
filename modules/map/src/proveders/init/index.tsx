import { PropsWithChildren, useEffect } from 'react';
import { useModule } from '@packages/hooks';

const InitProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const module = useModule(Modules.MAP);

    useEffect(() => {
        module.init();

        return () => {
            module.close();
        };
    }, []);

    return children;
};

export default InitProvider;
