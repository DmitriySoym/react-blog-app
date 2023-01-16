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

const enum SortByDate {
  DAY = "Day",
  WEEK = "Week",
  MONTH = "Month",
  YEAR = "Year",
}

const enum TabOne {
  ARTICLE = "articles",
  NEWS = "news",
  FAVORITES = "favorites",
}

const enum PortalTarget {
  MODAL = "modal",
}

const enum SortPosts {
  AZ = "az",
  ZA = "za",
}

interface IOptionDateSort {
  value: SortByDate;
  label: string;
}

interface ISelectOption {
  value: string;
  label: string;
}

export type { IArticle, INews, IOptionDateSort, ISelectOption };

export { SortByDate, TabOne, PortalTarget, SortPosts };
