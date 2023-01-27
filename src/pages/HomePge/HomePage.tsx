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
  setPage,
} from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { IOptionDateSort, ISelectOption, TabOne } from "types";
import { SingleValue } from "react-select";
import { StyledSortPosts, TimeSort } from "./styles";
import { useWindowSize } from "hooks";

export const HomePage = () => {
  const { posts, page } = useAppSelector(getAllposts);
  const { isAuth } = useAppSelector(getAccountInfo);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeButton, setActiveButton] = useState(buttons[0].id);
  const [isActiveDateSelect, setIsActiveDateSelect] = useState(optionDate[0]);
  const [isTitleSort, setIsTitleSort] = useState(optionSortByTitle[1]);
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const isTablet = width < 992.98;
  const dispatch = useAppDispatch();

  const handleActiveTab = (id: TabOne) => {
    setActiveTab(id);
    dispatch(setEndPoint(activeTab));
    dispatch(setPage(0));
  };

  const handleSetTitleSort = (optionSortByTitle: SingleValue<ISelectOption>) => {
    if (optionSortByTitle) {
      setIsTitleSort(optionSortByTitle);
    }
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
        page: page,
        query: "",
        sortParams: isTitleSort.value,
        endpoint: activeTab,
      }),
    );
  }, [dispatch, page, activeTab, isTitleSort.value]);

  useEffect(() => {
    if (!isAuth && activeTab === TabOne.FAVORITES) {
      alert("Sign in, please.");
      navigate(ROUTE.AUTH);
    }
  }, [activeTab, isAuth, navigate]);

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
      <Pagination
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
};
