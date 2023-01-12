import { Articles, Main, News, Tabs, SortPosts, SignInForm } from "components";
import { useEffect, useState } from "react";
import { TabOne } from "components/Tabs/Tabs";
import { useAuth } from "hooks";
import { SignInPage } from "pages/SignInPage/SignInPage";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const HomePage = () => {
  const { isAuth } = useAuth();
  const [activeTab, setActiveTab] = useState<TabOne>(TabOne.ARTICLE);

  return (
    <Main>
      <Tabs tab={activeTab} setTab={setActiveTab} />
      <SortPosts />
      {activeTab === TabOne.ARTICLE && <Articles />}
      {activeTab === TabOne.NEWS && <News />}
      {activeTab === TabOne.FAVORITES && isAuth === true ? (
        <span>Faivorite page</span>
      ) : (
        <span>Log in, please</span>
      )}
    </Main>
  );
};

// export interface ITab {
//   id: string;
//   label: string;
// }
// export const HomePage = () => {
//   // const [activeTab, setActiveTab] = useState<TabOne>(TabOne.ARTICLE);
//   const tabs: ITab[] = [
//     { id: "1", label: "Articles" },
//     { id: "2", label: "News" },
//     { id: "3", label: "Favorites" },
//   ];
//   const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

//   const handleTabClick = (id: string) => {
//     setSelectedTabId(id);
//   };

//   return (
//     <Main>
//       {/* <Tabs tab={activeTab} setTab={setActiveTab} /> */}
//       <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
//       <SortPosts />
//       {/* {activeTab === TabOne.ARTICLE && <Articles />}
//       {activeTab === TabOne.NEWS && <News />} */}
//       {selectedTabId === tabs[0].id && <Articles />}
//       {selectedTabId === tabs[1].id && <News />}
//       {selectedTabId === tabs[2].id && <div>Favorites</div>}
//     </Main>
//   );
// };
