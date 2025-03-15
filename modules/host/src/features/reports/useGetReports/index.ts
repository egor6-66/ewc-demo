import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IReport } from '@/entities';

const staleMin = 5;

const useGetReports = () => {
    return useQuery<IReport.IData>({
        queryKey: ['reportsConfig'],
        staleTime: 1000 * 60 * staleMin,
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/reportsConfig`, {
                params: {
                    current: '1.0.0',
                },
            });

            return data;
        },
    });
};

export default useGetReports;
