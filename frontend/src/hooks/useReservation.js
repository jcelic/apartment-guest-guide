import { useQuery } from '@tanstack/react-query';
import { getReservation } from '../api/guide';

export const useReservation = (token) => {
  return useQuery({
    queryKey: ['reservation', token],
    queryFn: () => getReservation(token),
    enabled: !!token,
  });
};
