import { Photos } from 'unsplash-js/dist/methods/search/types/response';

export type UnsplashResponseData = {
  type: 'success';
  response: Photos;
  originalResponse: Response;
  errors?: undefined;
  status: number;
};
export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  links: {
    html: string;
  };
  alt_description: string;
}

export type PagenationProps = {
  page: number;
  totalPages: number;
  loadPage: (direction: Direction) => void;
};

export type SearchProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ResultProps = {
  searchTerm: string;
};

export type Direction = 'prev' | 'next';
