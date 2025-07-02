import { useState } from "react";
import Heading from "./components/Heading";
import Headlines from "./components/Headlines";
import Trending from "./components/Trending";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("india");

  const {
    data,
    loading,
  }: {
    data: any;
    loading: boolean;
  } = useFetch("everything", "q", `${searchTerm}`);
  
  return (
    <div className="w-full h-screen pt-4">
      {/* {search ?} */}
      <div className="w-full h-full">
        {/* TOP BAR */}
        <Heading
          barActivated={search}
          setBarActivated={setSearch}
          setSearchTerm={setSearchTerm}
        />
        {search ? (
          <div className="w-full my-8">
            <Trending data={data} loading={loading} subject={searchTerm} search={true} />
          </div>
        
      ) : (
          <div className="w-full h-64 my-8">
                <Headlines />
            <Trending data={data} loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
