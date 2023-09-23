import { CurrencySelect } from '@/pages';

export const CurrencyPage = () => {
  return (
    <div className='w-full h-full bg-white rounded-lg'>
      <h1 className='text-4xl px-3 py-2'>Currency Exchange</h1>
      <div className='px-3 py-2 w-[15rem]'>
        <CurrencySelect />
      </div>
    </div>
  );
};

export default CurrencyPage;
