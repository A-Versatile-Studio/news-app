import React from "react";

function Card() {
  return (
    <div className="relative flex w-5/6 flex-col rounded-xl bg-neutral-50 bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={`https://picsum.photos/1080/1080`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-1 block font-dm-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-950 antialiased">
          Title of the cards
        </h5>
        <p className="text-neutral-400 font-dm-sans tracking-tighter text-sm py-1  antialiased">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde,
          porro exercitationem veritatis dolorum quam amet sequi...
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none absolute right-4 flex justify-end items-end gap-3 rounded-lg bg-red-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-400/20 transition-all hover:shadow-lg hover:shadow-red-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <p>Read More</p>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 23 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"
          >
            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
            <path d="m21 3-9 9" />
            <path d="M15 3h6v6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
