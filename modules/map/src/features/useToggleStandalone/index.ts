import { useEffect } from 'react';
import { useModule } from '@packages/hooks';
import { Modules } from '@packages/types';

function useToggleStandalone() {
    const module = useModule(Modules.MAP);

    const handleToggleStandalone = (value: boolean) => {
        module.send({
            target: 'HOST',
            eventName: 'toggleStandalone',
            data: { standalone: value },
        });
    };

    const toggle = () => {
        const isStandalone = module.checkStandalone();
        handleToggleStandalone(!isStandalone);
        isStandalone ? module.windowEvents.close() : module.windowEvents.openNewWindow({ moduleUrl: `https://localhost/map`, delay: 250 });
    };

    useEffect(() => {
        console.log(module.checkStandalone());

        window.onunload = () => {
            handleToggleStandalone(false);
        };
    }, []);

    return { toggle };
}

export default useToggleStandalone;
