import { AirportType } from '@/types';

export const DisplayAirports: React.FC<{
  airports: AirportType[];
}> = (props) => {
  const displayAirports = props.airports?.map(
    (airport: AirportType, index: number) => {
      return (
        <h1 className='text-sm md:text-xl' key={index}>
          {airport.iata} - {airport.name} ({airport.city})
        </h1>
      );
    },
  );
  return (
    <div className='flex flex-col h-[13rem] overflow-auto gap-3'>
      {displayAirports}
    </div>
  );
};

export default DisplayAirports;
