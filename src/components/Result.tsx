import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "../utils/utils";
import { Direction, ResultProps } from "../types";
import Pagenation from "./Pagenation";
import Gallery from "./Gallery";

const Result = ({ searchTerm }: ResultProps) => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["photos", page, searchTerm],
    queryFn: () => fetchImages(page, searchTerm),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  const loadPage = (direction: Direction) => {
    if (direction === "next") {
      setPage((a) => a + 1);
    } else {
      setPage((a) => a - 1);
    }
  };

  return (
    <>
      <Gallery images={data.results} />
      {data.total_pages > 0 && (
        <Pagenation
          page={page}
          totalPages={data.total_pages}
          loadPage={loadPage}
        />
      )}
    </>
  );
};

export default Result;
