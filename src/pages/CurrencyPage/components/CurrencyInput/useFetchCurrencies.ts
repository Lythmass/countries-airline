import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const fetchCurrencies = async (from: string, to: string) => {
  const response = await fetch(
    'https://api.exchangerate.host/convert?from=' + from + '&to=' + to,
  );
  return response.json();
};

export default function useFetchCurrencies(
  number: number,
  setResult?: (value: number) => void,
) {
  const [fromTo, setFromTo] = useState({ from: '', to: '' });
  const { data } = useQuery(
    'currency+' + fromTo.from + '-' + fromTo.to,
    () =>
      fromTo.from.length > 0 &&
      fromTo.to.length > 0 &&
      fetchCurrencies(fromTo.from, fromTo.to),
    { refetchOnMount: false, refetchOnWindowFocus: false },
  );
  const handleMutation = (from: string, to: string) => {
    setFromTo({ from: from, to: to });
  };

  useEffect(() => {
    if (data !== undefined) {
      setResult && setResult(data.result * number);
    }
  }, [data, number, setResult]);
  return { data, handleMutation };
}
