import { NavWrapper, Tab } from "./styles";
import { CustomNavLink } from "components";
import { ROUTE } from "router";
import { useToggle } from "hooks";
import { Dispatch, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";

export const enum TabOne {
  ARTICLE = "articles",
  NEWS = "news",
  FAVORITES = "favorites",
}
interface IProps {
  tab: TabOne;
  setTab: Dispatch<SetStateAction<TabOne>>;
}

export const Tabs = ({ tab, setTab }: IProps) => {
  const [isActive, setIsActive] = useState<TabOne>();

  const handleArticles = () => {
    setTab(TabOne.ARTICLE);
    setIsActive(TabOne.ARTICLE);
  };

  const handleNews = () => {
    setTab(TabOne.NEWS);
    setIsActive(TabOne.NEWS);
  };

  const handleFavorites = () => {
    setTab(TabOne.FAVORITES);
    setIsActive(TabOne.FAVORITES);
  };

  return (
    <NavWrapper>
      <Tab isActive={isActive === TabOne.ARTICLE} onClick={handleArticles}>
        Articles
      </Tab>
      <Tab isActive={isActive === TabOne.NEWS} onClick={handleNews}>
        News
      </Tab>
      <Tab isActive={isActive === TabOne.FAVORITES} onClick={handleFavorites}>
        Favorites
      </Tab>
    </NavWrapper>
  );
};

// export interface ITab {
//   id: string;
//   label: string;
// }
// export interface ITabsProps {
//   tabs: ITab[];
//   onClick: (id: string) => void;
//   selectedId: string;
// }

// export const Tabs = ({ tabs, onClick, selectedId }: ITabsProps) => {
//   const [isActive, setIsActive] = useState();

//   return (
//     <NavWrapper>
//       {tabs &&
//         tabs.map((tab) => (
//           <Tab isActive={selectedId === tab.id} key={tab.id} onClick={() => onClick(tab.id)}>
//             {tab.label}
//           </Tab>
//         ))}
//     </NavWrapper>
//   );
// };
