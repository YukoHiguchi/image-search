import { createApi } from 'unsplash-js';

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
});

export const PAR_PAGE = 15;
export const fetchImagesUnsplash = async (page: number, searchTerm: string) => {
  if (!searchTerm) {
    return [];
  }
  const data = await api.search.getPhotos({
    query: searchTerm,
    page: page,
    perPage: PAR_PAGE,
  });
  return data || [];
};
