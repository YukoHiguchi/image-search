import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchImagesUnsplash } from '../utils/utils';
import {
  Direction,
  ResultProps,
  UnsplashImage,
  UnsplashResponseData,
} from '../types';
import Pagenation from './Pagenation';
import Gallery from './Gallery';

const Result = ({ searchTerm }: ResultProps) => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['photos', page, searchTerm],
    queryFn: () => fetchImagesUnsplash(page, searchTerm),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  const loadPage = (direction: Direction) => {
    if (direction === 'next') {
      setPage((a) => a + 1);
    } else {
      setPage((a) => a - 1);
    }
  };

  if ((data as UnsplashResponseData).response.total === 0) {
    return <div>No Result</div>;
  } else {
    return (
      <>
        <Gallery
          images={
            (data as UnsplashResponseData).response.results as UnsplashImage[]
          }
        />
        {(data as UnsplashResponseData).response.total_pages > 0 && (
          <Pagenation
            page={page}
            totalPages={(data as UnsplashResponseData).response.total_pages}
            loadPage={loadPage}
          />
        )}
      </>
    );
  }
};

export default Result;
