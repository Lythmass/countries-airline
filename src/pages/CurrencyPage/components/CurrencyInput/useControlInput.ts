import { useEffect } from 'react';

export default function useControlInput(
  number: number,
  setNumber: (value: number) => void,
  mutation: (from: string, to: string) => void,
  currencyName: string,
  targetCurrencySymbol?: string,
  targetCurrencyName?: string,
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(event.target.value));
  };
  useEffect(() => {
    mutation(
      currencyName,
      targetCurrencySymbol === ''
        ? currencyName
        : targetCurrencyName
        ? targetCurrencyName
        : '',
    );
  }, [number]);

  return { number, handleChange };
}
