import Pages from '../pages';
import { AuthProvider, InitProvider, QueryProvider } from '../proveders';

const App = () => {
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
