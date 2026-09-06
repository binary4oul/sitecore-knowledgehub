import Link from "next/link";
// import { articles } from "@/data/articles";
import { getArticleBySlug } from "@/lib/sitecore";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-2xl font-bold">
          Article not found
        </h1>

        <Link
          href="/"
          className="mt-4 inline-block text-blue-600"
        >
          ← Back to knowledge hub
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <article className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">

        <Link
          href="/"
          className="text-sm text-blue-600"
        >
          ← Back
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
            {article.category}
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-bold text-gray-900">
          {article.title}
        </h1>

        <div className="mt-4 text-sm text-gray-500">
          By {article.author} · {article.publishedDate}
        </div>

        <div className="mt-8 text-lg leading-8 text-gray-700">
          {article.content}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

      </article>
    </main>
  );
}