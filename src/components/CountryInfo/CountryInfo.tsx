export const CountryInfo: React.FC<{ name: string; value: string }> = (
  props,
) => {
  return (
    <div className='flex items-center justify-between shadow-md bg-white py-2 px-3 rounded-lg w-full'>
      <h1 className='font-bold text-sm md:text-base'>{props.name}:</h1>
      <h1 className='overflow-x-auto pl-4 text-sm md:text-basetext-sm md:text-base'>
        {props.value}
      </h1>
    </div>
  );
};

export default CountryInfo;
