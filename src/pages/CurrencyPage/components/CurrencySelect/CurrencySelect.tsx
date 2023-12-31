import { useSelectCountries } from '@/hooks';
import { useParams } from 'react-router-dom';
import ReactSelect from 'react-select';

export const CurrencySelect: React.FC<{
  setTargetCurrency: (value: { symbol: string; name: string }) => void;
  setResult: (value: number) => void;
}> = (props) => {
  const options = useSelectCountries(true);
  const { countryCode } = useParams();
  const handleChange = (value: any) => {
    props.setTargetCurrency({
      symbol: value?.symbol ? value?.symbol : '',
      name: value?.currencyName ? value?.currencyName : '',
    });
    props.setResult(0);
  };
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
          onChange={handleChange}
          options={options}
          defaultValue={options.find(
            (option: any) => option.value === countryCode,
          )}
        />
      )}
    </>
  );
};

export default CurrencySelect;
