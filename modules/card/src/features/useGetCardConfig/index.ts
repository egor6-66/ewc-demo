import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetCardConfig = (cartType: string) => {
    return useQuery({
        queryKey: ['cardConfig', cartType],
        staleTime: 1000 * 20,
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/cardConfig/${cartType}`, {
                params: {
                    current: '1.0.0',
                },
            });

            return data ? JSON.parse(data) : undefined;
        },
    });
};

export default useGetCardConfig;
