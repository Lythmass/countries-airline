import { AirportType } from '@/types';
import { useState } from 'react';

export default function useAirportsHandler() {
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

  return { airports, airportHandler };
}
