import Link from "next/link";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Internal Knowledge Hub
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Sitecore Knowledge Base
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Browse internal articles about Sitecore XM Cloud, JSS, Next.js,
            search, and digital engineering best practices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                  {article.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-gray-900">
                {article.title}
              </h2>

              <p className="mt-3 text-gray-600">{article.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <p>{article.author}</p>
                  <p>{article.publishedDate}</p>
                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}