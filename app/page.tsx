import { getArticles } from "@/lib/sitecore";
import SearchableArticles from "@/components/SearchableArticles";

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          Sitecore Knowledge Base
        </h1>

        <p className="mt-3 text-gray-600">
          Search internal engineering articles.
        </p>

        <SearchableArticles articles={articles} />

      </div>
    </main>
  );
}