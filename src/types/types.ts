interface IPost {
  id: string;
  url: string;
  updated_at: string;
  summary: string;
  title: string;
  image_url: string;
  newSite: string;
  results: IPost[];
  count: number;
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
  index: number;
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
  id: number;
  title: string;
}

export type { IOptionDateSort, ISelectOption, ITab, IButton, IPost };

export { TabOne, PortalTarget };
