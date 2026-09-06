import { Article } from "@/models/Article";

export const articles: Article[] = [
  {
    id: "1",
    title: "Getting Started with Sitecore XM Cloud",
    slug: "getting-started-with-sitecore-xm-cloud",
    summary:
      "An introduction to Sitecore XM Cloud and how it supports modern headless digital experiences.",
    content:
      "Sitecore XM Cloud is a cloud-native CMS designed for modern composable digital experiences. It supports headless development, JSS, Next.js, and Experience Edge.",
    category: "Sitecore",
    tags: ["XM Cloud", "Sitecore", "Headless"],
    author: "Engineering Team",
    publishedDate: "2026-09-01",
  },
  {
    id: "2",
    title: "Building Headless Applications with Next.js",
    slug: "building-headless-applications-with-nextjs",
    summary:
      "How Next.js can be used as the presentation layer for Sitecore headless applications.",
    content:
      "Next.js works well with Sitecore JSS because it provides server-side rendering, static generation, routing, and modern React development patterns.",
    category: "Frontend",
    tags: ["Next.js", "React", "JSS"],
    author: "Frontend Team",
    publishedDate: "2026-09-02",
  },
  {
    id: "3",
    title: "Improving Sitecore Search Experiences",
    slug: "improving-sitecore-search-experiences",
    summary:
      "Practical approaches for improving content discovery and search relevance.",
    content:
      "Sitecore Search can index published website content through crawling or ingestion APIs. Search relevance can then be improved through metadata, filtering, and ranking configuration.",
    category: "Search",
    tags: ["Sitecore Search", "Search", "XM Cloud"],
    author: "Platform Team",
    publishedDate: "2026-09-03",
  },
];