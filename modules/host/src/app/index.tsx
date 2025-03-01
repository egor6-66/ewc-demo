import { useEffect } from 'react';
import { useBroadcast } from '@packages/hooks';

import Pages from '../pages';
import { AuthProvider, QueryProvider, RouterProvider } from '../proveders';

const App = () => {
    const bnroadcast = useBroadcast();

    useEffect(() => {
        // bnroadcast.init('HOST');

        return () => {
            bnroadcast.close();
        };
    }, []);

    return (
        <QueryProvider>
            <RouterProvider>
                <AuthProvider>
                    <Pages />
                </AuthProvider>
            </RouterProvider>
        </QueryProvider>
    );
};

export default App;
