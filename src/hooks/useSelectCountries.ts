import { useCountries } from '@/hooks';
import { useEffect, useState } from 'react';

export default function useSelectCountries(addSymbol = false) {
  const [options, setOptions] = useState([]);
  const { countries } = useCountries();

  useEffect(() => {
    setOptions(() => {
      return countries?.map(
        (country: {
          code: string;
          name: string;
          currency: { [key: string]: { symbol: string } };
        }) => {
          if (!addSymbol) {
            return {
              value: country.code,
              label: country.name,
            };
          } else {
            return {
              value: country.code,
              label: country.name,
              symbol:
                country.currency !== undefined &&
                country.currency[Object.keys(country.currency)[0]].symbol,
              currencyName:
                country.currency !== undefined &&
                Object.keys(country.currency)[0],
            };
          }
        },
      );
    });
  }, [countries]);

  return options;
}
