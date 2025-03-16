import Pages from '../pages';
import { InitProvider, QueryProvider } from '../proveders';

const App = () => {
    return (
        <InitProvider>
            <Pages />
        </InitProvider>
    );
};

export const StandAlone = () => {
    return (
        <InitProvider>
            <QueryProvider>
                <Pages />
            </QueryProvider>
        </InitProvider>
    );
};

export default App;
