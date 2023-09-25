import { useStore } from '@/store';
import { CountryInfo } from '..';

export const DisplayCountries = () => {
  const { country } = useStore();
  const currency: false | { name: string; symbol: string } =
    country?.currency !== undefined &&
    country.currency[Object.keys(country.currency)[0]];

  return (
    <div className='w-full min-h-[10rem] mt-6 flex gap-3 flex-col md:flex-row lg:items-center'>
      <div className='text-[8rem] flex items-center shadow-md bg-white w-[10rem] rounded-xl h-full'>
        {country !== undefined && country.flag}
      </div>
      <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='w-full flex flex-col h-full justify-between gap-3'>
          <CountryInfo name='Capital' value={country?.capital} />
          <CountryInfo
            name='Currency'
            value={`${currency && currency.name}, (${
              currency && currency.symbol
            })`}
          />
          <CountryInfo
            name='Region'
            value={`${country?.region}, ${country?.subRegion}`}
          />
        </div>
        <div className='w-full flex flex-col h-full justify-between gap-3'>
          <CountryInfo name='Continent' value={country?.continent} />
          <CountryInfo
            name='Population'
            value={country?.population.toString()}
          />
          <CountryInfo name='Borders' value={`${country?.borders}`} />
        </div>
      </div>
    </div>
  );
};

export default DisplayCountries;
