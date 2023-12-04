import axios, { AxiosError } from "axios";

export const PAR_PAGE = 15;
export const fetchImages = async (page: number, searchTerm: string) => {
  console.log("fetchImages is called", page, searchTerm);

  if (!searchTerm) {
    return [];
  }
  const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${PAR_PAGE}&page=${page}&client_id=${
    import.meta.env.VITE_UNSPLASH_API_KEY
  }`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};
