import { useEffect } from 'react';
import { DisplayAirports, SearchAirport } from '.';
import { useGetAirports } from '@/hooks';
import useAirportsHandler from './components/useAirportsHandler';

export const AirportPage = () => {
  const { airports, airportHandler } = useAirportsHandler();
  const { data } = useGetAirports();
  useEffect(() => {
    if (data?.length > 0 && airports.length === 0) {
      airportHandler(data);
    }
  }, [data, airports.length, airportHandler]);
  return (
    <div className='w-full flex flex-col gap-4 px-3 py-2 bg-white shadow-lg rounded-lg'>
      <h1 className='text-xl lg:text-4xl '>Airports</h1>
      <SearchAirport setAirports={airportHandler} />
      <DisplayAirports airports={airports} />
    </div>
  );
};

export default AirportPage;
