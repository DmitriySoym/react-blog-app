import { NavWrapper, Tab } from "./styles";
import { TabOne, ITab } from "types";

interface IProps {
  tabs: ITab[];
  onClick: (id: TabOne) => void;
  isActiveTab: string;
}

export const tabs: ITab[] = [
  { id: TabOne.ARTICLE, label: "Articles" },
  { id: TabOne.NEWS, label: "News" },
  { id: TabOne.FAVORITES, label: "Favorites" },
];

export const Tabs = ({ tabs, onClick, isActiveTab }: IProps) => {
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
};
