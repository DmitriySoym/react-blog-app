import { Articles, Main, News, Tabs, SortPosts } from "components";
import { useState } from "react";

export enum ActiveTab {
  ARTICLE = "article",
  NEWS = "news",
  FAVORITES = "favorites",
}

interface IActiveTab {
  activeTab: ActiveTab.ARTICLE;
}

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<boolean>(true);
  return (
    <Main>
      <Tabs />
      <SortPosts />
      <Articles />
    </Main>
  );
};
