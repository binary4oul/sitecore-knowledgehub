"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => {
    const text =
      `
      ${article.title}
      ${article.summary}
      ${article.category}
      ${article.tags.join(" ")}
      `.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          Sitecore Knowledge Base
        </h1>

        <p className="mt-3 text-gray-600">
          Search internal engineering articles.
        </p>

        <div className="mt-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>


        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="
              rounded-xl
              bg-white
              p-6
              shadow-sm
              "
            >

              <h2 className="text-xl font-bold">
                {article.title}
              </h2>


              <p className="mt-3 text-gray-600">
                {article.summary}
              </p>


              <div className="mt-4">
                {article.tags.map((tag)=>(
                  <span
                    key={tag}
                    className="
                    mr-2
                    rounded
                    bg-gray-100
                    px-2 py-1
                    text-sm
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/articles/${article.slug}`}
                className="
                mt-5
                inline-block
                text-blue-600
                "
              >
                Read article →
              </Link>

            </article>
          ))}
        </div>
      </div>
    </main>
  );
}