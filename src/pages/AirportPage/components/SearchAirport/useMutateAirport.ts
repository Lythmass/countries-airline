import { fetchAirports } from '@/hooks/useGetAirports';
import { useStore } from '@/store';
import { AirportType } from '@/types';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

export default function useMutateAirport(
  value: string,
  setAirports: (value: AirportType[]) => void,
) {
  const mutation = useMutation(
    (data: { search: string; country: string }) => {
      return fetchAirports(data?.country, data.search);
    },
    { onSuccess: (response) => setAirports(response) },
  );
  const { country } = useStore();

  useEffect(() => {
    if (value?.length === 0) {
      setAirports([]);
    }
    const timer = setTimeout(() => {
      if (value?.length > 0) {
        mutation.mutate({ country: country?.codeShort, search: value });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return { mutation };
}
