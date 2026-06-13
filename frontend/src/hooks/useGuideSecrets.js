import { useQuery } from '@tanstack/react-query';
import { getGuideSecrets } from '../api/guide';

export const useGuideSecrets = (token) => {
  return useQuery({
    queryKey: ['guide-secrets', token],
    queryFn: () => getGuideSecrets(token),
    enabled: !!token,
  });
};
