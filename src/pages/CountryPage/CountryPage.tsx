import { useParams } from 'react-router-dom';

export const CountryPage = () => {
  const { countryCode } = useParams();

  return (
    <div className='w-full h-full'>
      <h1>{countryCode}</h1>
    </div>
  );
};

export default CountryPage;
