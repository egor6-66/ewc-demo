import Pages from '../pages';
import { InitProvider, QueryProvider } from '../proveders';

const App = () => {
    return (
        <InitProvider>
            <QueryProvider>
                <Pages />
            </QueryProvider>
        </InitProvider>
    );
};

export default App;
