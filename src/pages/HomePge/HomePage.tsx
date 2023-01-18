import { Articles, Main, News, Tabs, SortPosts, Pagination, Title } from "components";
import { useEffect, useState } from "react";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { SortByDate, TabOne } from "types";

export const HomePage = () => {
  const { isAuth } = useAuth();
  const [activeTab, setActiveTab] = useState<TabOne>(TabOne.ARTICLE);
  const [activeDate, setActiveDate] = useState<SortByDate>(SortByDate.DAY);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && activeTab === TabOne.FAVORITES) {
      alert("Sign in, please.");
      navigate(ROUTE.AUTH);
    }
  }, [activeTab]);

  return (
    <>
      <Main>
        <Title value="Blog" />
        <Tabs tab={activeTab} setTab={setActiveTab} />
        <SortPosts period={activeDate} setPeriod={setActiveDate} />
        {activeTab === TabOne.ARTICLE && <Articles />}
        {activeTab === TabOne.NEWS && <News />}
        {activeTab === TabOne.FAVORITES && isAuth === true && <span>Faivorite page.</span>}
      </Main>
      <Pagination />
    </>
  );
};
