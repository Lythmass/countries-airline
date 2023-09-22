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
      ></Select>
    </div>
  );
};

export default SelectCountries;
