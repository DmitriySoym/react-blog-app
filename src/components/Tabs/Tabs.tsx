import { NavWrapper, Tab } from "./styles";
import { TabOne, ITab } from "types";
import { memo } from "react";

interface IProps {
  tabs: ITab[];
  onClick: (id: TabOne) => void;
  isActiveTab: string;
}

export const tabs: ITab[] = [
  { id: TabOne.ARTICLE, label: "Articles", value: "articles" },
  { id: TabOne.NEWS, label: "News", value: "news" },
  { id: TabOne.FAVORITES, label: "Favorites", value: "" },
];

export const Tabs = memo(({ tabs, onClick, isActiveTab }: IProps) => {
  return (
    <NavWrapper>
      {tabs &&
        tabs.map((tab) => (
          <Tab isActive={isActiveTab === tab.id} key={tab.id} onClick={() => onClick(tab.id)}>
            {tab.label}
          </Tab>
        ))}
    </NavWrapper>
  );
});
