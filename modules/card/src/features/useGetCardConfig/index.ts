import { useIndexDB } from '@packages/hooks';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const staleMin = 5;

const useGetCardConfig = (cartType: string) => {
    return useQuery({
        queryKey: ['cardConfig', cartType],
        staleTime: 1000 * 60 * staleMin,
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/cardConfig/${cartType}`, {
                params: {
                    current: '1.0.0',
                },
            });

            return data;
        },
    });
};

export default useGetCardConfig;
