import React from 'react'

function Heading() {
  return (
            <div className="w-full px-8 flex justify-between items-center">
          <h1 className="font-dm-sans text-2xl font-regular">
            Hey, <br />
            <span className="font-dm-sans text-3xl font-bold">Welcome</span>
          </h1>
          <div className="w-14 h-14 bg-red-400 rounded-xl flex justify-center items-center">
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
          </div>
        </div>
  )
}

export default Heading