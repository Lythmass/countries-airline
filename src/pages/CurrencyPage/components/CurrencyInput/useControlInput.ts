import { useEffect } from 'react';

export default function useControlInput(
  number: number,
  setNumber: (value: number) => void,
  mutation: { mutate: (params: { from: string; to: string }) => void },
  currencyName: string,
  targetCurrencySymbol?: string,
  targetCurrencyName?: string,
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(event.target.value));
  };
  useEffect(() => {
    mutation.mutate({
      from: currencyName,
      to:
        targetCurrencySymbol === ''
          ? currencyName
          : targetCurrencyName
          ? targetCurrencyName
          : '',
    });
  }, [number]);

  return { number, handleChange };
}
