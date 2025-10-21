import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import BtnSearch from "@/Components/Home/BtnSearch";
import BtnClear from "@/Components/Home/BtnClear";
import Table from "@/Components/Home/Table";
import ContainerAlert from "@/Components/ContainerAlert";

export default function Home({ result }) {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState(null);

  return (
    <div className="w-screen h-screen flex justify-center bg-gray-300">
      <div className="w-screen flex flex-col p-4 items-center md:m-5 md:w-2/3 md:rounded-md">
        <div className="relative w-full">
          <input
            className="w-full pl-4 pr-10 py-2 border border-orange-600 rounded-full bg-orange-300 text-white"
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-orange-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="w-full flex justify-center mt-2 gap-4">
          <BtnSearch search={search} />
          <BtnClear setSearch={setSearch} />
        </div>

        {result ? <Table result={result} /> : null}

        <ContainerAlert message={alert} />
      </div>
    </div>
  );
}
