import { useStore } from '@/store';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

const fetchCurrencies = async (from: string, to: string) => {
  const response = await fetch(
    'https://api.exchangerate.host/convert?from=' + from + '&to=' + to,
  );
  return response.json();
};

export const CurrencyInput: React.FC<{
  isDisabled: boolean;
  targetCurrency?: { symbol: string; name: string };
  result?: number;
  setResult?: (value: number) => void;
}> = (props) => {
  const [number, setNumber] = useState(0);
  const { country } = useStore();

  const currency =
    country?.currency !== undefined &&
    country.currency[Object.keys(country.currency)[0]];
  const currencyName =
    country?.currency !== undefined && Object.keys(country.currency)[0];

  const mutation = useMutation(
    (data: any) => {
      return fetchCurrencies(data.from, data.to);
    },
    {
      onSuccess: (response) => {
        props.setResult && props.setResult(response.result * number);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(event.target.value));
  };
  useEffect(() => {
    mutation.mutate({
      from: currencyName,
      to:
        props.targetCurrency?.symbol === ''
          ? currencyName
          : props.targetCurrency?.name,
    });
  }, [number]);
  const symbol =
    props.targetCurrency?.symbol === ''
      ? currency.symbol
      : props.targetCurrency?.symbol;
  return (
    <div className='w-full flex items-center gap-3'>
      <div className='text-[#808080] h-4e'>
        {props.isDisabled ? symbol : currency.symbol}
      </div>
      <input
        className={`w-full border-b ${
          !props.isDisabled ? 'text-black' : 'text-[#808080]'
        } border-b-[#808080] focus:outline-none`}
        min={0}
        value={props.isDisabled ? props.result : number}
        onChange={handleChange}
        disabled={props.isDisabled}
        type='number'
      />
    </div>
  );
};

export default CurrencyInput;
