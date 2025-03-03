import Pages from '../pages';
import { AuthProvider, InitProvider, QueryProvider } from '../proveders';

const App = (props: { test: string }) => {
    return (
        <InitProvider>
            <QueryProvider>
                <AuthProvider>
                    <Pages />
                </AuthProvider>
            </QueryProvider>
        </InitProvider>
    );
};

export default App;
