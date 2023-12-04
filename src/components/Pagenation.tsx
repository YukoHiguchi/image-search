import { PagenationProps } from "../types";
import { PAR_PAGE } from "../utils/utils";

const Pagenation = ({ page, totalPages, loadPage }: PagenationProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm">
        Showing <span className="font-medium">{(page - 1) * PAR_PAGE + 1}</span>{" "}
        to <span className="font-medium">{page * PAR_PAGE}</span> results
      </p>
      <div className="flex justify-between sm:hidden">
        {page > 1 && (
          <button
            className="mx-2 px-4 py-2 rounded-md border border-purple-200"
            onClick={() => loadPage("prev")}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="mx-2 px-4 py-2 rounded-md border border-purple-200"
            onClick={() => loadPage("next")}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagenation;
