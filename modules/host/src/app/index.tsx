import Pages from '../pages';
import { AuthProvider, QueryProvider, RouterProvider } from '../proveders';

const App = () => {
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
