import { useSelectCountries } from '@/hooks';
import { useParams } from 'react-router-dom';
import ReactSelect from 'react-select';

export const CurrencySelect = () => {
  const options = useSelectCountries();
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
