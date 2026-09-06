"use client";

import { useState } from "react";
import Link from "next/link";
import { Article } from "@/models/Article";
import SearchBar from "./SearchBar";

interface Props {
  articles: Article[];
}

export default function SearchableArticles({
  articles,
}: Props) {

  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => {

    const text = `
      ${article.title}
      ${article.summary}
      ${article.category}
      ${article.tags.join(" ")}
    `.toLowerCase();

    return text.includes(search.toLowerCase());
  });


  return (
    <>
      <div className="mt-8">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>


      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {filteredArticles.map((article)=>(
          <article
            key={article.id}
            className="rounded-xl bg-white p-6 shadow"
          >

            <h2 className="text-xl font-bold">
              {article.title}
            </h2>


            <p className="mt-3 text-gray-600">
              {article.summary}
            </p>


            <div className="mt-4">
              {article.tags.map(tag=>(
                <span
                  key={tag}
                  className="mr-2 rounded bg-gray-100 px-2 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>


            <Link
              href={`/articles/${article.slug}`}
              className="mt-5 inline-block text-blue-600"
            >
              Read article →
            </Link>

          </article>
        ))}

      </div>
    </>
  );
}