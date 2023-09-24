import { useSelectCountries } from '@/hooks';
import { useParams } from 'react-router-dom';
import ReactSelect from 'react-select';

export const CurrencySelect: React.FC<{
  setTargetCurrency: (value: { symbol: string; name: string }) => void;
  setResult: (value: number) => void;
}> = (props) => {
  const options = useSelectCountries(true);
  const { countryCode } = useParams();
  return (
    <>
      {options?.length && (
        <ReactSelect
          styles={{
            control: (styles) => ({
              ...styles,
              width: '100%',
              borderRadius: '0',
              padding: '0.1rem 0',
              borderRight: 'none',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: '1px solid gray',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              fontWeight: 'bold',
            }),
          }}
          onChange={(value: any) => {
            props.setTargetCurrency({
              symbol: value.symbol,
              name: value.currencyName,
            });
            props.setResult(0);
          }}
          options={options}
          defaultValue={options.find(
            (option: { value: string }) => option.value === countryCode,
          )}
        />
      )}
    </>
  );
};

export default CurrencySelect;
