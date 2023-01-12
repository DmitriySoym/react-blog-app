import { NavWrapper } from "./styles";
import { CustomNavLink } from "components";
import { ROUTE } from "router";
import { useToggle } from "hooks";

interface IProps {
  activeTab: string;
  setTab: (activeTab: string) => void;
}

// export const Tabs = ({ setTab, activeTab }: IProps) => {
export const Tabs = () => {
  const [isActive, setIsActive] = useToggle();

  // const handleArticles = () => {
  //   setTab("articles");
  //   setIsActive();
  // };

  // const handleNews = () => {
  //   setTab("blogs");
  //   setIsActive();
  // };

  return (
    <NavWrapper>
      <CustomNavLink to={ROUTE.ARTICLES}>Articles</CustomNavLink>
      <CustomNavLink to={ROUTE.NEWS}>News</CustomNavLink>
      <CustomNavLink to={ROUTE.FAVORIRES}>Favorites</CustomNavLink>
    </NavWrapper>
  );
};
