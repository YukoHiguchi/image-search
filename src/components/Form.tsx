import { SearchProps } from "../types";

const Form = ({ setSearchTerm, searchImages }: SearchProps) => {
  return (
    <form
      onSubmit={searchImages}
      className="flex max-w-md w-full my-4 mx-auto text-gray-600"
    >
      <input
        className="bg-white h-10 px-4 w-full rounded-l-xl text-sm forus:outline-none"
        type="search"
        placeholder="enter keyword..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="rounded-r-xl px-6 py-2 text-white bg-violet-500 hover:bg-violet-600 focus:outline-none disabled:bg-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
