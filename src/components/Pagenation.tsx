import { ChevronRight, ChevronLeft } from 'react-feather';

import { PagenationProps } from '../types';
import { PAR_PAGE } from '../utils/utils';
const Pagenation = ({ page, totalPages, loadPage }: PagenationProps) => {
  return (
    <div className='flex items-center flex-col gap-3'>
      <p className='text-sm'>
        Showing <span className='font-medium'>{(page - 1) * PAR_PAGE + 1}</span>{' '}
        to <span className='font-medium'>{page * PAR_PAGE}</span> results
      </p>
      <div className='flex justify-between'>
        {page > 1 && (
          <button
            className='mx-2 border-2 border-netral-700 hover:bg-neutral-700 hover:text-white focus:outline-none font-medium rounded-lg text-sm p-2 text-center transition-all duration-300'
            onClick={() => loadPage('prev')}
          >
            <span className='flex items-center gap-2'>
              <ChevronLeft /> <span className='sm:hidden '>Previous</span>
            </span>
          </button>
        )}
        {page < totalPages && (
          <button
            type='button'
            className='mx-2 border-2 border-netral-700 hover:bg-neutral-700 hover:text-white focus:outline-none font-medium rounded-lg text-sm p-2 ps-3 text-center transition-all duration-300'
            onClick={() => loadPage('next')}
          >
            <span className='flex items-center gap-2'>
              <span className='sm:hidden'>Next</span> <ChevronRight />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagenation;
