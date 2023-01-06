interface IArticle {
  id: string;
  url: string;
  publishedAt: string;
  summary: string;
  title: string;
  imageUrl: string;
  newSite: string;
}

interface INews {
  id: string;
  url: string;
  publishedAt: string;
  summary: string;
  title: string;
  imageUrl: string;
  newSite: string;
}

export type { IArticle, INews };
