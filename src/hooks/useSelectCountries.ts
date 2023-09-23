import { useCountries } from '@/hooks';
import { useEffect, useState } from 'react';

export default function useSelectCountries() {
  const [options, setOptions] = useState([]);
  const { countries } = useCountries();

  useEffect(() => {
    setOptions(() => {
      return countries?.map((country: { code: string; name: string }) => {
        return {
          value: country.code,
          label: country.name,
        };
      });
    });
  }, [countries]);

  return options;
}
