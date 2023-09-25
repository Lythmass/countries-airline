import { useEffect, useState } from 'react';
import { DisplayAirports, SearchAirport } from '.';
import { AirportType } from '@/types';
import { useGetAirports } from '@/hooks';
import { useStore } from '@/store';

export const AirportPage = () => {
  const [airports, setAirports] = useState<AirportType[]>([]);
  const airportHandler = (value: AirportType[]) => {
    setAirports(() => {
      return value
        .filter((airport) => airport.iata !== '')
        .map((airport) => {
          return {
            name: airport.name,
            city: airport.city,
            iata: airport.iata,
          };
        });
    });
  };
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
