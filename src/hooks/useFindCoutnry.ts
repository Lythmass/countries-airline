import { useStore } from '@/store';
import { useEffect } from 'react';
import { useCountries } from '@/hooks';

export default function useFindCountry(countryToFind: string) {
  const { countries } = useCountries();
  const { setCountry } = useStore();

  useEffect(() => {
    if (setCountry !== undefined && countries !== undefined) {
      setCountry(() => {
        return countries.find(
          (country: { code: string }) => country.code === countryToFind,
        );
      });
    }
  }, [countries, setCountry, countryToFind]);
}
