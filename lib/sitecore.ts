import { articles } from "@/data/articles";
import { Article } from "@/models/Article";


/**
 * Simulates Sitecore XM Cloud GraphQL delivery
 */
export async function getArticles(): Promise<Article[]> {
  return articles;
}


/**
 * Simulates fetching a Sitecore item by URL slug
 */
export async function getArticleBySlug(
  slug: string
): Promise<Article | undefined> {
  return articles.find(
    (article) => article.slug === slug
  );
}