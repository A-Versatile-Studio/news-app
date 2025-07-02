import React from "react";

function Card({
  image,
  author,
  description,
  publishedAt,
  title,
  url,
  source,
}: {
  image: string;
  author: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  source: string;
}) {
  return (
    <div className="relative flex w-[90%] flex-col rounded-xl bg-neutral-50 bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h5 className="mb-1 block font-dm-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-950 antialiased">
          {title?.slice(0, 80)}...
        </h5>
        <p className="text-neutral-400 font-dm-sans tracking-tighter text-sm py-1  antialiased">
          {description?.slice(0, 120)}...
        </p>
        <div className="w-3/5 my-2 h-[1px] rounded-2xl bg-red-200"></div>

        {author && (
          <p className="text-neutral-400 font-dm-sans tracking-tighter text-sm py-1  antialiased flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pen-line-icon lucide-pen-line"
            >
              <path d="M12 20h9" />
              <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
            </svg>
            <span className="font-semibold">Author</span> - {author}
          </p>
        )}

        <p className="text-neutral-400 font-dm-sans tracking-tighter text-sm py-1  antialiased flex justify-start items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-open-text-icon lucide-book-open-text"
          >
            <path d="M12 7v14" />
            <path d="M16 12h2" />
            <path d="M16 8h2" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            <path d="M6 12h2" />
            <path d="M6 8h2" />
          </svg>
          <span className="font-semibold">Source</span> - {source}
        </p>

        <div className="w-5/6 my-2 h-[1px] rounded-2xl bg-red-200"></div>
        <p className="text-neutral-400 font-dm-sans tracking-tighter text-sm py-1 antialiased flex justify-start items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar-days-icon lucide-calendar-days"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
          <span className="font-semibold">Date -</span>
          {publishedAt.split("T")[0]}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          href={url}
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
        </a>
      </div>
    </div>
  );
}

export default Card;
