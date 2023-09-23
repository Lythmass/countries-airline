import { useCountries } from '@/hooks';
import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

const fetchGeoLocation = async (lat: number, long: number) => {
  const response = await fetch(
    'https://api.api-ninjas.com/v1/reversegeocoding?lat=' +
      lat +
      '&lon=' +
      long,
    {
      headers: new Headers({
        'content-type': 'application/json',
        'X-Api-Key': 'o7DPnQDqQ2/OXf9elPbnXA==jXYVqIlZBt5BcIG4',
      }),
    },
  );
  return response.json();
};

export default function useAskLocation() {
  const navigate = useNavigate();
  const { countries } = useCountries();
  const location = useLocation();
  const defaultCountry = useMutation(
    (data: any) => {
      return fetchGeoLocation(data.lat, data.long);
    },
    {
      onSuccess: (response) => {
        const code = countries?.find(
          (country: { codeShort: string }) =>
            response[0].country === country.codeShort,
        );
        if (code !== undefined) {
          navigate(`/${code.code}`);
        }
      },
    },
  );

  useEffect(() => {
    if (
      navigator.geolocation &&
      location.pathname === '/' &&
      countries !== undefined
    ) {
      navigator.geolocation.getCurrentPosition((position) => {
        defaultCountry.mutate({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, [countries]);
}
