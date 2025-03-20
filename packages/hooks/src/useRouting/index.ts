import { useLocation, useNavigate } from 'react-router-dom';

import { Params } from './interfaces';

const params: Record<Params, string> = {
    cardId: '',
};

function useRouting() {
    const navigate = useNavigate();
    const location = useLocation();

    const getParams = (): Record<Params, string> => {
        const pathArr = location.pathname.split('/') as Array<Params>;

        return pathArr.reduce((acc, segment, index) => {
            if (segment in params) {
                params[segment] = pathArr[index + 1];
            }

            return params;
        }, params);
    };

    return { navigate, location, getParams };
}

export default useRouting;
