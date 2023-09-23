import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export const Store = createContext<{
  countries: any;
  country: any;
  setCountry: Dispatch<SetStateAction<any>> | undefined;
  setCountries: Dispatch<SetStateAction<any>> | undefined;
}>({
  countries: [{}],
  country: [{}],
  setCountry: undefined,
  setCountries: undefined,
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [countries, setCountries] = useState([{}]);
  const [country, setCountry] = useState({});
  return (
    <Store.Provider value={{ countries, setCountries, country, setCountry }}>
      {children}
    </Store.Provider>
  );
};

export const useStore = () => useContext(Store);
