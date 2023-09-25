import { useState } from 'react';
import { AirportType } from '@/types';
import useMutateAirport from './useMutateAirport';

export const SearchAirport: React.FC<{
  setAirports: (value: AirportType[]) => void;
}> = (props) => {
  const [value, setValue] = useState('');
  const { mutation } = useMutateAirport(value, props.setAirports);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className='w-full flex-col lg:flex-row items-center lg:gap-10'>
      <input
        type='text'
        onChange={handleChange}
        value={value}
        placeholder='Search for airport'
        className='border-b w-full md:px-2 focus:outline-none py-1 border-b-[#808080]'
      />
      {mutation.isLoading && <h1 className='h-4'>Loading...</h1>}
    </div>
  );
};

export default SearchAirport;
