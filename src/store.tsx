import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { CountryType } from './types';

export const Store = createContext<{
  countries: CountryType[];
  country: CountryType;
  setCountry: Dispatch<SetStateAction<any>> | undefined;
  setCountries: Dispatch<SetStateAction<any>> | undefined;
}>({
  countries: [
    {
      name: '',
      code: '',
      codeShort: '',
      capital: '',
      currency: { '': { symbol: '', name: '' } },
      region: '',
      subRegion: '',
      flag: '',
      population: 0,
      continent: 'string',
      borders: [''],
    },
  ],
  country: {
    name: '',
    code: '',
    codeShort: '',
    capital: '',
    currency: { '': { symbol: '', name: '' } },
    region: '',
    subRegion: '',
    flag: '',
    population: 0,
    continent: 'string',
    borders: [''],
  },
  setCountry: undefined,
  setCountries: undefined,
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [countries, setCountries] = useState<CountryType[]>([
    {
      name: '',
      code: '',
      codeShort: '',
      capital: '',
      currency: { '': { symbol: '', name: '' } },
      region: '',
      subRegion: '',
      flag: '',
      population: 0,
      continent: 'string',
      borders: [''],
    },
  ]);
  const [country, setCountry] = useState<CountryType>({
    name: '',
    code: '',
    codeShort: '',
    capital: '',
    currency: { '': { symbol: '', name: '' } },
    region: '',
    subRegion: '',
    flag: '',
    population: 0,
    continent: 'string',
    borders: [''],
  });
  return (
    <Store.Provider value={{ countries, setCountries, country, setCountry }}>
      {children}
    </Store.Provider>
  );
};

export const useStore = () => useContext(Store);
