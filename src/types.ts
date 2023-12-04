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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ResultProps = {
  searchTerm: string;
};

export type Direction = "prev" | "next";
