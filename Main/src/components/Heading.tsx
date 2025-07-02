import React, { useState } from "react";

function Heading({ barActivated, setBarActivated, setSearchTerm}: {
  barActivated: boolean,
  setBarActivated: any,
  setSearchTerm: any
}) {
  const [input, trackInput] = useState("")

  const handleSearch = () => {
    setSearchTerm(input)
  }
  return (
    <div className="w-full px-4 flex justify-between items-center">
      {barActivated ? (
        <div className={`${barActivated ? "opacity-100" : "opacity-0"} flex w-full justify-between items-center gap-3 transition-all duration-700`}>
          <input
            className="w-5/6 py-3 outline-none border-1 transition-all duration-300 focus:shadow-2xl shadow-red-500/40 border-transparent px-4 placeholder:text-gray-400 focus:border-red-400 focus:bg-white rounded-xl bg-gray-200 ml-2"
            placeholder="eg, US Trade"
            value={input}
            onChange={(e) => trackInput(e.target.value)}
          />
          <button className="w-14 h-12 bg-red-400 rounded-xl flex justify-center items-center" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <button className="w-6 h-6 flex justify-center items-center" onClick={() => setBarActivated(!barActivated)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cccccc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      ) : (
        <React.Fragment>
          <h1 className={`${barActivated ? "opacity-0" : "opacity-100"} font-dm-sans text-2xl font-regular`}>
            Hey, <br />
            <span className="font-dm-sans text-3xl font-bold">Welcome</span>
          </h1>

          <button
            className="w-14 h-14 bg-red-400 rounded-xl flex justify-center items-center"
            onClick={() => setBarActivated(!barActivated)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default Heading;
