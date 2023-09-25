export type CountryType = {
  name: string;
  code: string;
  codeShort: string;
  capital: string;
  currency: { [key: string]: { symbol: string; name: string } };
  region: string;
  subRegion: string;
  flag: string;
  population: number;
  continent: string;
  borders: string[];
};
