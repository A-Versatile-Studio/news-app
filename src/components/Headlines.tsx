import { useFetch } from "../hooks/useFetch";
import MiniLoader from "./MiniLoader";

function HeadlinesCard({
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
    <a
      href={url}
      className="w-96 h-60 rounded-4xl overflow-hidden flex justify-start items-end relative"
    >
      <div
        className="absolute z-10 right-24 top-0 w-auto py-1 bg-black/50 backdrop-blur-md pl-6 px-10"
        style={{ borderRadius: "0px 20px 0px 10rem" }}
      >
        <p className="font-dm-sans text-sm text-white text-right">{source}</p>
      </div>

      <div
        className="absolute z-10 right-0 top-0 w-auto py-1 bg-black/80 backdrop-blur-md pl-6 px-8"
        style={{ borderRadius: "0px 20px 0px 10rem" }}
      >
        <p className="font-dm-sans text-sm text-white text-right">
          {publishedAt.split("T")[0]}
        </p>
      </div>
      <div className="h-auto pb-6 px-4">
        <div className="px-4 py-0.5 rounded-full border border-white/50 bg-white/10 backdrop-blur-md w-fit text-xs text-white">
          {author}
        </div>
        <h1 className="font-semibold text-lg tracking-tight text-white mt-1.5">
          {/* {title} */}
          {title?.slice(0, 60)}...
        </h1>
        <p className="text-sm text-neutral-400 font-normal tracking-tighter font-dm-sans">
          {description?.slice(0, 140)}
          {/* {description} */}
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 bg-linear-to-b from-black/0 to-black -z-10"></div>
      <img
        src={image}
        alt="image appear here"
        className="w-full h-full object-cover absolute inset-0 -z-20"
      />
    </a>
  );
}

function Headlines() {
  const {
    data,
    loading,
  }: {
    data: any;
    loading: boolean;
  } = useFetch("top-headlines", "q", "india");

  if (loading) {
    return <MiniLoader />;
  }

  if (data) {
    return (
      <div
        className="w-screen max-w-full overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <h1 className="font-dm-sans text-4xl font-semibold px-8">Headlines</h1>
        <div className="flex gap-3 pl-8 pr-4 py-3 w-max relative">
          {data.articles.length > 0 &&
            data.articles
              .slice(0, 10)
              .map((items: any, index: number) => (
                <HeadlinesCard
                  author={items.author}
                  description={items.description}
                  image={items.urlToImage}
                  publishedAt={items.publishedAt}
                  source={items.source.name}
                  title={items.title}
                  url={items.url}
                  key={index}
                />
              ))}
        </div>
      </div>
    );
  }
}

export default Headlines;
