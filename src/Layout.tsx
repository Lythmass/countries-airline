import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[60%] h-[75vh] rounded-xl shadow-lg bg-slate-100'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
