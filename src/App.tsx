import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget?.search?.value;
    if (!searchValue) return;

    setSearchTerm(searchValue);
  };

  return (
    <div className="flex items-center flex-col my-8">
      <Title />
      <Form handleSubmit={handleSubmit} />
      {searchTerm?.length > 0 && <Result searchTerm={searchTerm} />}
    </div>
  );
}

export default App;
