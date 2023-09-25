import { useQuery } from 'react-query';
import { useStore } from '@/store';

export const fetchAirports = async (country: string, search = '') => {
  const url = 'https://api.api-ninjas.com/v1/airports?';
  let urlWithParams = '';
  if (search.length) {
    urlWithParams =
      url + 'country=' + country?.toLowerCase() + '&name=' + search;
  } else {
    urlWithParams = url + 'country=' + country?.toLowerCase();
  }
  const response = await fetch(urlWithParams, {
    headers: new Headers({
      'content-type': 'application/json',
      'X-Api-Key': 'o7DPnQDqQ2/OXf9elPbnXA==jXYVqIlZBt5BcIG4',
    }),
  });
  return response.json();
};

export default function useGetAirports() {
  const { country } = useStore();
  const { data, refetch } = useQuery(
    'airport-' + country?.codeShort,
    (search: any) =>
      country?.codeShort.length > 0 &&
      fetchAirports(country?.codeShort, search),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );
  return { data, refetch };
}
