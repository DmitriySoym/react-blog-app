import {
  Articles,
  Main,
  News,
  Tabs,
  Pagination,
  Title,
  Favorites,
  CustomSortByDateSelect,
  CustomTitleSelect,
  SortButtons,
} from "components";
import { useEffect, useState } from "react";
import { useAppSelector, getAccountInfo, getAllposts } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { IButton, IOptionDateSort, ISelectOption, ITab, SortByDate, SortPost, TabOne } from "types";
import { SingleValue } from "react-select";
import { StyledSortPosts, TimeSort } from "./styles";
import { useWindowSize } from "hooks";

const tabs: ITab[] = [
  { id: TabOne.ARTICLE, label: "Articles" },
  { id: TabOne.NEWS, label: "News" },
  { id: TabOne.FAVORITES, label: "Favorites" },
];

//------24/01
const buttons: IButton[] = [
  { id: "0", title: "Day" },
  { id: "1", title: "Week" },
  { id: "2", title: "Month" },
  { id: "3", title: "Year" },
];

const optionSortByTitle: ISelectOption[] = [
  { value: SortPost.AZ, label: "Title (A-Z)" },
  { value: SortPost.ZA, label: "Title (Z-A)" },
];

export const optionDate: IOptionDateSort[] = [
  { value: SortByDate.DAY, label: "Day" },
  { value: SortByDate.WEEK, label: "Week" },
  { value: SortByDate.MONTH, label: "Month" },
  { value: SortByDate.YEAR, label: "Year" },
];

//--------------------

export const HomePage = () => {
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

  const handleActiveTab = (id: TabOne) => {
    setActiveTab(id);
  };
  //------------24/01
  const { width = 0 } = useWindowSize();
  const [activeButton, setActiveButton] = useState(buttons[0].id);
  const [isActiveDateSelect, setIsActiveDateSelect] = useState(optionDate[0]);
  const [isTitleSort, setIsTitleSort] = useState(optionSortByTitle[0]);
  const isTablet = width < 992.98;

  const handleSetTitleSort = (newValue: SingleValue<ISelectOption>) => {
    if (newValue) {
      setIsTitleSort(newValue);
    }
  };

  const handleSetDate = (id: string) => {
    setActiveButton(id);
    setIsActiveDateSelect(optionDate[+id]);
    console.log(id);
  };

  const handleSetActiveDateSelect = (newValue: SingleValue<IOptionDateSort>) => {
    if (newValue) {
      setIsActiveDateSelect(newValue);
      if (newValue === optionDate[0]) {
        setActiveButton("0");
      }
      if (newValue === optionDate[1]) {
        setActiveButton("1");
      }
      if (newValue === optionDate[2]) {
        setActiveButton("2");
      }
      if (newValue === optionDate[3]) {
        setActiveButton("3");
      }
    }
  };
  // const { results, totalCount, isLoading } = useAppSelector(getBlog);
  // const dispatch = useAppDispatch();

  // const [offset, setOffset] = useState<number>(0);
  // const [sort, setSort] = useState<Sort>();
  // const [period, setPeriod] = useState<Period>();

  // const handlePageChange = useCallback(({ selected }: { selected: number }) => {
  //   setOffset(selected * PerPage);
  // }, []);
  // useEffect(() => {
  //   dispatch(fetchAllBlogEntries({ category, sort, offset }));
  // }, [dispatch, category, sort, offset]);

  //----------------------

  return (
    <>
      <Main>
        <Title value="Blog" />
        <Tabs isActiveTab={activeTab} tabs={tabs} onClick={handleActiveTab} />
        <StyledSortPosts>
          <TimeSort>
            {!isTablet && (
              <SortButtons
                buttons={buttons}
                onClick={handleSetDate}
                isActivebutton={activeButton}
              />
            )}
            {isTablet && (
              <CustomSortByDateSelect
                options={optionDate}
                onChange={handleSetActiveDateSelect}
                value={isActiveDateSelect}
              />
            )}
            <CustomTitleSelect
              options={optionSortByTitle}
              onChange={handleSetTitleSort}
              value={isTitleSort}
            />{" "}
          </TimeSort>
        </StyledSortPosts>
        {activeTab === TabOne.ARTICLE && <Articles articles={articles} />}
        {activeTab === TabOne.NEWS && <News news={news} />}
        {activeTab === TabOne.FAVORITES && <Favorites />}
      </Main>
      <Pagination />
    </>
  );
};
