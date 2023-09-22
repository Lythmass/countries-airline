import Select from 'react-select';

export const SelectCountries = () => {
  const options = [
    { value: 'geo', label: 'Georgia' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'us', label: 'United States' },
  ];

  return (
    <div className='w-full'>
      <Select
        styles={{
          control: (styles) => ({
            ...styles,
            width: '100%',
            borderTopLeftRadius: '0.75rem',
            borderTopRightRadius: '0.75rem',
            padding: '0.5rem 0',
            backgroundColor: 'transparent',
          }),
        }}
        defaultValue={options[0]}
        options={options}
      ></Select>
    </div>
  );
};

export default SelectCountries;
