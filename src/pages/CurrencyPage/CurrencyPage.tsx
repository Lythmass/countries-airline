import { CurrencyInput, CurrencySelect } from '@/pages';

export const CurrencyPage = () => {
  return (
    <div className='w-full h-full bg-white shadow-lg rounded-lg'>
      <h1 className='text-4xl px-3 py-2'>Currency Exchange</h1>
      <div className='px-3 py-2 flex flex-col gap-5 w-full'>
        <CurrencySelect />
        <div className='w-full flex gap-4'>
          <CurrencyInput isDisabled={false} />
          <CurrencyInput isDisabled={true} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyPage;
