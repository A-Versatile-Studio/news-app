import Card from "./components/Card";
import Heading from "./components/Heading";
import Headlines from "./components/Headlines";

function App() {
  return (
    <div className="w-full h-screen pt-4">
      <div className="w-full h-full">
        {/* TOP BAR */}
        <Heading />
        <div className="w-full h-64 my-8">
          <h1 className="font-dm-sans text-4xl font-semibold px-8">
            Headlines
          </h1>
          <div
            className="w-screen max-w-full overflow-x-auto"
            style={{ scrollbarWidth: "none" }}>
            <div
              className="flex gap-3 pl-8 pr-4 py-3 w-max">
                <Headlines />
            </div>
          </div>

          {/* Trendings */}
                    <div
            className="w-screen max-w-full overflow-x-auto"
            style={{ scrollbarWidth: "none" }}>

            <div className="flex gap-5 pl-8 pr-4 py-3 w-max">
              <h1 className={`text-xl font-dm-sans tracking-tighter relative after:absolute after:w-3/4 after:border-b-2 after:inset-0 after:border-red-400 text-red-400`}>For You</h1>
              <h1 className="text-xl font-dm-sans tracking-tighter text-neutral-400">Trending</h1>
            </div>
          </div>
        <div className="flex justify-center items-center flex-col gap-4 py-10">
          <Card />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
