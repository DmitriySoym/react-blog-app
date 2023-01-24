import { Articles, Main, News, Tabs, SortPosts, Pagination, Title, Favorites } from "components";
import { useEffect, useState } from "react";
import { useAppSelector, getAccountInfo, getAllposts } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { ITab, TabOne } from "types";

export const HomePage = () => {
  const tabs: ITab[] = [
    { id: TabOne.ARTICLE, label: "Articles" },
    { id: TabOne.NEWS, label: "News" },
    { id: TabOne.FAVORITES, label: "Favorites" },
  ];

  const { articles, news } = useAppSelector(getAllposts);

  const { isAuth } = useAppSelector(getAccountInfo);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && activeTab === TabOne.FAVORITES) {
      alert("Sign in, please.");
      navigate(ROUTE.AUTH);
    }
  }, [activeTab, isAuth, navigate]);

  const handleTabClick = (id: TabOne) => {
    setActiveTab(id);
  };

  return (
    <>
      <Main>
        <Title value="Blog" />
        <Tabs isActiveTab={activeTab} tabs={tabs} onClick={handleTabClick} />
        <SortPosts />
        {activeTab === TabOne.ARTICLE && <Articles articles={articles} />}
        {activeTab === TabOne.NEWS && <News news={news} />}
        {activeTab === TabOne.FAVORITES && <Favorites />}
      </Main>
      <Pagination />
    </>
  );
};
