import { useStore } from '@/store';

export default function useGetCurrencyTypes() {
  const { country } = useStore();

  const currency: { symbol: string } =
    country?.currency !== undefined
      ? country?.currency[Object.keys(country?.currency)[0]]
      : { symbol: '' };

  const currencyName =
    country?.currency !== undefined ? Object.keys(country?.currency)[0] : '';

  return { currency, currencyName };
}
