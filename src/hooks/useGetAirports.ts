import { useMutation } from 'react-query';
import { AirportType } from '@/types';

const fetchAirports = async (country: string, search = '') => {
  const url = 'https://api.api-ninjas.com/v1/airports?';
  let urlWithParams = '';
  if (search.length) {
    urlWithParams =
      url + 'country=' + country?.toLowerCase() + '&name=' + search;
  } else {
    urlWithParams = url + 'country=' + country?.toLowerCase();
  }
  console.log(urlWithParams);
  const response = await fetch(urlWithParams, {
    headers: new Headers({
      'content-type': 'application/json',
      'X-Api-Key': 'o7DPnQDqQ2/OXf9elPbnXA==jXYVqIlZBt5BcIG4',
    }),
  });
  return response.json();
};

export default function useGetAirports(
  setAirports: (value: AirportType[]) => void,
) {
  const mutation = useMutation(
    (data: any) => {
      if (data?.search) {
        return fetchAirports(data?.country, data.search);
      } else {
        return fetchAirports(data?.country);
      }
    },
    { onSuccess: (response) => response.length && setAirports(response) },
  );

  return { mutation };
}
