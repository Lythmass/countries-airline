import { useEffect } from 'react';
import { DisplayAirports, SearchAirport } from '.';
import { useGetAirports } from '@/hooks';
import { useStore } from '@/store';
import useAirportsHandler from './components/useAirportsHandler';

export const AirportPage = () => {
  const { airports, airportHandler } = useAirportsHandler();
  const { mutation } = useGetAirports(airportHandler);
  const { country } = useStore();

  useEffect(() => {
    if (country !== undefined && airports.length === 0) {
      mutation.mutate({ country: country.codeShort });
    }
  }, [country]);

  return (
    <div className='w-full flex flex-col gap-4 px-3 py-2 bg-white shadow-lg rounded-lg'>
      <h1 className='text-4xl'>Airports</h1>
      <SearchAirport setAirports={airportHandler} />
      <DisplayAirports airports={airports} />
    </div>
  );
};

export default AirportPage;
