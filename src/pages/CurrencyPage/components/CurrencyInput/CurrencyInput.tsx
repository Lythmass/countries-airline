import { useState } from 'react';
import useFetchCurrencies from './useFetchCurrencies';
import useGetCurrencyTypes from './useGetCurrencyTypes';
import useControlInput from './useControlInput';

export const CurrencyInput: React.FC<{
  isDisabled: boolean;
  targetCurrency?: { symbol: string; name: string };
  result?: number;
  setResult?: (value: number) => void;
}> = (props) => {
  const [number, setNumber] = useState(0);
  const { currency, currencyName } = useGetCurrencyTypes();
  const { handleMutation } = useFetchCurrencies(number, props.setResult);
  const { handleChange } = useControlInput(
    number,
    setNumber,
    handleMutation,
    currencyName,
    props.targetCurrency?.symbol,
    props.targetCurrency?.name,
  );

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
        value={props.isDisabled ? (props?.result ? props.result : 0) : number}
        onChange={handleChange}
        disabled={props.isDisabled}
        type='number'
      />
    </div>
  );
};

export default CurrencyInput;
