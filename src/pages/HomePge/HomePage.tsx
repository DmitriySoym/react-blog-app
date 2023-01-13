import { Articles, Main, News, Tabs, SortPosts, SignInForm } from "components";
import { useEffect, useState } from "react";
import { TabOne } from "components/Tabs/Tabs";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const HomePage = () => {
  const { isAuth } = useAuth();
  const [activeTab, setActiveTab] = useState<TabOne>(TabOne.ARTICLE);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false && activeTab === TabOne.FAVORITES) {
      alert("Sign in, please.");
      navigate(ROUTE.AUTH);
    }
  }, [activeTab]);

  return (
    <Main>
      <Tabs tab={activeTab} setTab={setActiveTab} />
      <SortPosts />
      {activeTab === TabOne.ARTICLE && <Articles />}
      {activeTab === TabOne.NEWS && <News />}
      {activeTab === TabOne.FAVORITES && isAuth === true && <span>Faivorite page.</span>}
    </Main>
  );
};
