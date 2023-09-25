import { useEffect, useState } from 'react';
import { AirportType } from '@/types';
import { useGetAirports } from '@/hooks';
import { useStore } from '@/store';

export const SearchAirport: React.FC<{
  setAirports: (value: AirportType[]) => void;
}> = (props) => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const { mutation } = useGetAirports(props.setAirports);
  const { country } = useStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      mutation.mutate({ country: country?.codeShort, search: value });
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className='w-full flex items-center gap-10'>
      <input
        type='text'
        onChange={handleChange}
        value={value}
        placeholder='Search for airport'
        className='border-b px-2 focus:outline-none py-1 border-b-[#808080]'
      />
      {mutation.isLoading && <h1 className='h-4'>Loading...</h1>}
    </div>
  );
};

export default SearchAirport;
