interface IArticle {
  id: number;
  url: string;
  publishedAt: string;
  summary: string;
  title: string;
  imageUrl: string;
  newSite: string;
}

interface INews {
  id: number;
  url: string;
  publishedAt: string;
  summary: string;
  title: string;
  imageUrl: string;
  newSite: string;
}

export type { IArticle };
export type { INews };
