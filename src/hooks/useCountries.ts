import { useStore } from '@/store';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  return response.json();
};

export default function useCountries() {
  const countriesData = useQuery('countries', fetchCountries, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const { countries, setCountries } = useStore();

  useEffect(() => {
    if (setCountries !== undefined) {
      setCountries(() => {
        return countriesData?.data?.map((country: any) => {
          return {
            name: country.name.common,
            code: country.cca3,
            codeShort: country.cca2,
            capital: country.capital ? country.capital[0] : 'none',
            currency: country.currencies,
            region: country.region,
            subRegion: country.subregion,
            flag: country.flag,
            population: country.population,
            continent: country.continents[0],
            borders: country.borders,
          };
        });
      });
    }
  }, [countriesData.data, setCountries]);

  return { countries };
}
