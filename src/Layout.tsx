import { Outlet } from 'react-router-dom';
import { SelectCountries } from '@/pages';
export const Layout = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[60%] h-[75vh] flex flex-col gap-4 rounded-xl shadow-lg bg-slate-100'>
        <SelectCountries />
        <div className='p-10'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
