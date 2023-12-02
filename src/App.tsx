import { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Title from "./components/Title";
import Pagenation from "./components/Pagenation";
import "./App.css";
import { PAR_PAGE } from "./utils";
import { Direction, UnsplashImage } from "./types";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchImageData = async (currentPage: number) => {
    if (searchTerm) {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${PAR_PAGE}&page=${currentPage}&client_id=${
            import.meta.env.VITE_UNSPLASH_API_KEY
          }`
        );
        setImages(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const searchImages = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchImageData(1);
  };

  const loadPage = (direction: Direction) => {
    let currentPage;
    if (direction === "next") {
      currentPage = page + 1;
    } else {
      currentPage = page - 1;
    }
    setPage(currentPage);
    fetchImageData(currentPage);
  };

  return (
    <div className="flex items-center flex-col my-8">
      <Title />
      <Form setSearchTerm={setSearchTerm} searchImages={searchImages} />
      <Gallery images={images} />
      {totalPages > 0 && (
        <Pagenation page={page} totalPages={totalPages} loadPage={loadPage} />
      )}
    </div>
  );
}

export default App;
