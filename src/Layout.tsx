import { Outlet, useLocation } from 'react-router-dom';
import { DisplayCountries, SelectCountries } from '@/components';
import { useFindCountry } from '@/hooks';

export const Layout = () => {
  const location = useLocation();
  useFindCountry(location.pathname.substring(1));

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
