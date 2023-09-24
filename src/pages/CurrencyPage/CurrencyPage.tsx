import { CurrencyInput, CurrencySelect } from '@/pages';
import { useState } from 'react';

export const CurrencyPage = () => {
  const [targetCurrency, setTargetCurrency] = useState({
    symbol: '',
    name: '',
  });
  const [result, setResult] = useState(0);
  return (
    <div className='w-full h-full bg-white shadow-lg rounded-lg'>
      <h1 className='text-4xl px-3 py-2'>Currency Exchange</h1>
      <div className='px-3 py-2 flex flex-col gap-5 w-full'>
        <CurrencySelect
          setResult={setResult}
          setTargetCurrency={setTargetCurrency}
        />
        <div className='w-full flex gap-4'>
          <CurrencyInput
            setResult={setResult}
            targetCurrency={targetCurrency}
            isDisabled={false}
          />
          <CurrencyInput
            result={result}
            targetCurrency={targetCurrency}
            isDisabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyPage;
