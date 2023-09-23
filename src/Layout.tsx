import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { DisplayCountries, SelectCountries } from '@/components';
import { useFindCountry } from '@/hooks';

export const Layout = () => {
  const { countryCode } = useParams();
  useFindCountry(countryCode !== undefined ? countryCode : '');
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[60%] h-[75vh] rounded-xl shadow-lg bg-slate-100'>
        <SelectCountries />
        <div className='px-10 flex flex-col gap-10'>
          <DisplayCountries />
          <div className='w-full flex gap-10'>
            <button
              onClick={() => location.pathname.length > 4 && navigate(-1)}
              className={
                location.pathname.length <= 4
                  ? 'text-blue-600 shadow-[0_2px_#2563eb]'
                  : 'text-black'
              }
            >
              Currency Exchange
            </button>
            <button
              onClick={() =>
                location.pathname.length <= 4 && navigate('airport')
              }
              className={
                location.pathname.length > 4
                  ? 'text-blue-600 shadow-[0_2px_#2563eb]'
                  : 'text-black'
              }
            >
              Airports
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
