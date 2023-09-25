import { useGetAirports } from '@/hooks';
import { useStore } from '@/store';
import { AirportType } from '@/types';
import { useEffect } from 'react';

export default function useMutateAirport(
  value: string,
  setAirports: (value: AirportType[]) => void,
) {
  const { mutation } = useGetAirports(setAirports);
  const { country } = useStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      mutation.mutate({ country: country?.codeShort, search: value });
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return { mutation };
}
