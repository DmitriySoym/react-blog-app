interface IPost {
  id: string;
  url: string;
  publishedAt: string;
  summary: string;
  title: string;
  imageUrl: string;
  newSite: string;
}

const enum TabOne {
  ARTICLE = "articles",
  NEWS = "blogs",
  FAVORITES = "favorites",
}

const enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
  AUTH = "auth",
}

interface IOptionDateSort {
  value: Date;
  label: string;
  index: string;
}

interface ISelectOption {
  value: string;
  label: string;
}

interface ITab {
  id: TabOne;
  label: string;
  value: string;
}

interface IButton {
  id: string;
  title: string;
}

export type { IOptionDateSort, ISelectOption, ITab, IButton, IPost };

export { TabOne, PortalTarget };
