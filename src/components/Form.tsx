import { Search } from 'react-feather';
import { SearchProps } from '../types';

const Form = ({ handleSubmit }: SearchProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='container flex max-w-md my-4 mx-auto text-gray-600'
    >
      <label className='relative block w-full max-w-xl mx-auto'>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <Search className='h-5 w-5' />
        </span>
        <input
          className='hover:bg-gray-50 bg-white h-10 ps-8 pr-2 w-full rounded-l-md text-sm text-gray-900 border border-gray-300'
          type='search'
          name='search'
          placeholder='Search photos'
        />
      </label>
      <button
        className='rounded-r-md px-6 py-2 text-white bg-violet-500 hover:bg-violet-600 focus:outline-none disabled:bg-gray-400 transition-all duration-300'
        type='submit'
      >
        Search
      </button>
    </form>
  );
};

export default Form;
