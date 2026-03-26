import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useGetGreeting(language: string = 'en') {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['greeting', language],
    queryFn: async () => {
      if (!actor) return 'Hello World';
      return actor.getGreeting(language);
    },
    enabled: !!actor && !isFetching,
  });
}
