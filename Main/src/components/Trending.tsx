import React, { useEffect, useState } from "react";
import Card from "./Card";
import MainLoader from "./MainLoader";
import MiniLoader from "./MiniLoader";

function Trending({
  data,
  loading,
  subject,
  search = false,
}: {
  data: any;
  loading: boolean;
  subject?: string;
  search?: boolean;
}) {
  const [category, setCategory] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);

  // Populate unique categories once data is fetched
  useEffect(() => {
    if (data?.articles) {
      const uniqueSources: string[] = Array.from(
        new Set(
          data.articles.map((item: any) => item.source?.name).filter(Boolean)
        )
      );
      setCategory(["For You", ...uniqueSources]);
      setActiveTab("For You");
    }
  }, [data]);

  useEffect(() => {
    if (data?.articles) {
      const filtered =
        activeTab === "For You"
          ? data.articles
          : data.articles.filter(
              (item: any) => item.source?.name === activeTab
            );

      setFilteredArticles(filtered);
    }
  }, [activeTab, data]);

  useEffect(() => {
    if (subject) setActiveTab(subject);
  }, [subject]);

  if (loading) {
    return search ? <MainLoader /> : <MiniLoader />;
  }

  return (
    <>
      <div
        className="w-screen max-w-full overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-5 pl-8 pr-4 py-3 w-max">
          {category.length > 0 &&
            category.map((name: string, index: number) => (
              <h1
                key={index}
                onClick={() => setActiveTab(name)}
                className={`text-base cursor-pointer font-dm-sans tracking-tighter relative after:absolute after:w-3/4 after:inset-0 ${
                  activeTab === name
                    ? "after:border-red-400 text-red-400 after:border-b-1"
                    : "text-neutral-400"
                } transition-all duration-200`}
              >
                {name}
              </h1>
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-16 py-10">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((item: any, index: number) => (
            <Card
              key={index}
              author={item.author}
              title={item.title}
              description={item.description}
              image={item.urlToImage}
              publishedAt={item.publishedAt}
              source={item.source?.name}
              url={item.url}
            />
          ))
        ) : search ? (
          <div>
            <h1 className="text-center text-8xl font-bold text-gray-300 uppercase">
              4O4
            </h1>
            <p className="text-center text-gray-500">
              No articles available for {activeTab}
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-8xl font-bold text-gray-300 uppercase mb-6">
                -_-
            </h1>
            <p className="text-center text-gray-500">
              Something went Wrong, Try again later!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Trending;
