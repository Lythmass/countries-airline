import { useCountries } from '@/hooks';

export const DisplayCountries = () => {
  const { countries } = useCountries();

  return (
    <div className='w-full flex'>
      <div className='text-[8rem] w-[10rem] h-[10rem]'>
        {countries !== undefined && countries[0].flag}
        {countries === undefined && (
          <div className='w-full h-full bg-slate-200 mt-[2.55rem] rounded-lg' />
        )}
      </div>
      <div></div>
    </div>
  );
};

export default DisplayCountries;
