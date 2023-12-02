import { Dispatch, SetStateAction } from "react";

export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
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
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchImages: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type Direction = "prev" | "next";
