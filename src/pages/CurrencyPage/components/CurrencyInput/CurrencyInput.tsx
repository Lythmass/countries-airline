import { useStore } from '@/store';

export const CurrencyInput: React.FC<{ isDisabled: boolean }> = (props) => {
  const { country } = useStore();
  const currency =
    country?.currency !== undefined &&
    country.currency[Object.keys(country.currency)[0]];

  return (
    <div className='w-full flex items-center gap-3'>
      <div className='text-[#808080] h-4e'>{currency.symbol}</div>
      <input
        className={`w-full border-b ${
          !props.isDisabled ? 'text-black' : 'text-[#808080]'
        } border-b-[#808080]`}
        placeholder={currency.symbol}
        min={0}
        defaultValue={0}
        disabled={props.isDisabled}
        type='number'
      />
    </div>
  );
};

export default CurrencyInput;
