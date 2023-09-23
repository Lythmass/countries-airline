import { useCountries } from '@/hooks';
import { useEffect, useState } from 'react';

import Select from 'react-select';

export const SelectCountries = () => {
  const [options, setOptions] = useState([]);
  const { countries } = useCountries();
  useEffect(() => {
    setOptions(() => {
      return countries?.map((country: { code: string; name: string }) => {
        return {
          value: country.code,
          label: country.name,
        };
      });
    });
  }, [countries]);

  return (
    <div className='w-full'>
      {options?.length && (
        <Select
          styles={{
            control: (styles) => ({
              ...styles,
              width: '100%',
              borderRadius: '0',
              padding: '1rem 0.5rem 1rem 2rem',
              borderRight: 'none',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: '1px solid gray',
              backgroundColor: 'transparent',
              boxShadow: 'none',
            }),
          }}
          defaultValue={options[0]}
          options={options}
        />
      )}
    </div>
  );
};

export default SelectCountries;
