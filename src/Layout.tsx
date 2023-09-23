import { Outlet, useLocation } from 'react-router-dom';
import { DisplayCountries, SelectCountries } from '@/components';
import { useStore } from './store';
import { useEffect } from 'react';
import { useCountries } from './hooks';

export const Layout = () => {
  const { countries } = useCountries();
  const { setCountry } = useStore();
  const location = useLocation();
  useEffect(() => {
    if (setCountry !== undefined && countries !== undefined) {
      setCountry(() => {
        return countries.find(
          (country: { code: string }) =>
            country.code === location.pathname.substring(1),
        );
      });
    }
  }, [countries, location.pathname, setCountry]);
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[60%] h-[75vh] rounded-xl shadow-lg bg-slate-100'>
        <SelectCountries />
        <div className='px-10 flex flex-col'>
          <DisplayCountries />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
