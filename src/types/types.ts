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

const enum SortPost {
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

interface ITab {
  id: TabOne;
  label: string;
}

interface IButton {
  id: string;
  title: string;
}

export type { IArticle, INews, IOptionDateSort, ISelectOption, ITab, IButton };

export { SortByDate, TabOne, PortalTarget, SortPost };
