import { useAskLocation, useCountries } from '@/hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

  const navigate = useNavigate();
  const { countryCode } = useParams();
  const handleChange = (event: { value: string }) => {
    navigate(`/${event.value}`);
  };

  useAskLocation();
  return (
    <div className='w-full'>
      {options?.length && (
        <Select
          onChange={(event: any) => handleChange(event)}
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
              fontWeight: 'bold',
            }),
          }}
          value={options.find(
            (option: { value: string }) => option.value === countryCode,
          )}
          options={options}
        />
      )}
    </div>
  );
};

export default SelectCountries;
