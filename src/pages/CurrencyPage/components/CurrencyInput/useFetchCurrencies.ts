import { useMutation } from 'react-query';

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
  const mutation = useMutation(
    (data: { from: string; to: string }) => {
      return fetchCurrencies(data.from, data.to);
    },
    {
      onSuccess: (response) => {
        setResult && setResult(response.result * number);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
  return { mutation };
}
