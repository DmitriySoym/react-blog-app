import {
  PostsResults,
  Main,
  Tabs,
  tabs,
  Pagination,
  Title,
  Favorites,
  CustomSortByDateSelect,
  CustomTitleSelect,
  SortButtons,
} from "components";
import { useEffect, useState } from "react";
import {
  useAppSelector,
  getAccountInfo,
  getAllposts,
  optionDate,
  buttons,
  optionSortByTitle,
  useAppDispatch,
  fetchAllPosts,
  setEndPoint,
  setSortQuery,
} from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { IOptionDateSort, ISelectOption, TabOne } from "types";
import { SingleValue } from "react-select";
import { StyledSortPosts, TimeSort } from "./styles";
import { useWindowSize } from "hooks";

export const HomePage = () => {
  const { posts } = useAppSelector(getAllposts);
  const { isAuth } = useAppSelector(getAccountInfo);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeButton, setActiveButton] = useState(buttons[0].id);
  const [isActiveDateSelect, setIsActiveDateSelect] = useState(optionDate[0]);
  const [isTitleSort, setIsTitleSort] = useState(optionSortByTitle[0]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const isTablet = width < 992.98;
  const dispatch = useAppDispatch();

  const handleActiveTab = (id: TabOne) => {
    setActiveTab(id);
    dispatch(setEndPoint(activeTab));
  };

  const handleSetTitleSort = (newValue: SingleValue<ISelectOption>) => {
    if (newValue) {
      setIsTitleSort(newValue);
    }
    dispatch(setSortQuery(newValue?.value));
  };

  const handleSetDate = (id: string) => {
    setActiveButton(id);
    setIsActiveDateSelect(optionDate[+id]);
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

  useEffect(() => {
    dispatch(setEndPoint(activeTab));
  }, [activeTab, dispatch]);

  useEffect(() => {
    dispatch(
      fetchAllPosts({
        page: currentPage,
        query: "",
        sortParams: isTitleSort.value,
        endpoint: activeTab,
      }),
    );
  }, [dispatch, currentPage, activeTab, isTitleSort.value]);

  useEffect(() => {
    if (!isAuth && activeTab === TabOne.FAVORITES) {
      alert("Sign in, please.");
      navigate(ROUTE.AUTH);
    }
  }, [activeTab, isAuth]);

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
        {activeTab === TabOne.FAVORITES && <Favorites />}
        <PostsResults posts={posts} />
      </Main>
      <Pagination />
    </>
  );
};
