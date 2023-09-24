export const CountryInfo: React.FC<{ name: string; value: string }> = (
  props,
) => {
  return (
    <div className='flex items-center justify-between shadow-md bg-white py-2 px-3 rounded-lg w-full'>
      <h1 className='font-bold'>{props.name}:</h1>
      <h1 className='overflow-x-auto pl-4'>{props.value}</h1>
    </div>
  );
};

export default CountryInfo;
