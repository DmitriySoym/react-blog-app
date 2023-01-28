import {
  PostsResults,
  Main,
  Tabs,
  tabs,
  Pagination,
  Title,
  CustomSortByDateSelect,
  CustomTitleSelect,
  SortButtons,
  RegistrationInfo,
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
  const { width = 0 } = useWindowSize();
  const isTablet = width < 992.98;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const handleSetActiveDateSelect = (optionDate: SingleValue<IOptionDateSort>) => {
    if (optionDate) {
      setIsActiveDateSelect(optionDate);
      setActiveButton(optionDate.index);
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
        publicationDate: isActiveDateSelect.value,
      }),
    );
  }, [dispatch, page, activeTab, isTitleSort.value, isActiveDateSelect.value]);

  useEffect(() => {
    if (!isAuth && activeTab === TabOne.FAVORITES) {
      navigate(ROUTE.AUTH);
    }
    if (isAuth && activeTab === TabOne.FAVORITES) {
      navigate(ROUTE.FAVORIRES);
    }
  }, [dispatch, activeTab, isAuth]);

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
