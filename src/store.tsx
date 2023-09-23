import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export const Store = createContext<{
  countries: any;
  setCountries: Dispatch<SetStateAction<any>> | undefined;
}>({
  countries: [{}],
  setCountries: undefined,
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [countries, setCountries] = useState([{}]);
  return (
    <Store.Provider value={{ countries, setCountries }}>
      {children}
    </Store.Provider>
  );
};

export const useStore = () => useContext(Store);
