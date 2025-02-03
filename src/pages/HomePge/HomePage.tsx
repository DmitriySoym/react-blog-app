import {
  PostsResults,
  Main,
  Tabs,
  tabs,
  Pagination,
  Title,
  CustomSortByDateSelect,
  SortButtons,
  RegistrationInfo,
  buttons,
  optionDate,
} from "components";
import { useEffect, useState } from "react";
import {
  useAppSelector,
  getAccountInfo,
  getAllposts,
  useAppDispatch,
  fetchAllPosts,
  setEndPoint,
  setPage,
  getPortalState,
  setCurrentPageValue,
} from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { IOptionDateSort, TabOne } from "types";
import { SingleValue } from "react-select";
import { StyledSortPosts, TimeSort } from "./styles";
import { useWindowSize } from "hooks";

export const HomePage = () => {
  const { posts, page } = useAppSelector(getAllposts);
  const { isAuth } = useAppSelector(getAccountInfo);
  const { isPortalOpen } = useAppSelector(getPortalState);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeButton, setActiveButton] = useState(buttons[2].id);
  const [isActiveDateSelect, setIsActiveDateSelect] = useState(optionDate[2]);
  const { width = 0 } = useWindowSize();
  const isTablet = width < 992.98;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleActiveTab = (id: TabOne) => {
    setActiveTab(id);
    dispatch(setEndPoint(activeTab));
    dispatch(setPage(1));
    dispatch(setCurrentPageValue(1));
  };

  const handleSetDate = (id: number) => {
    setActiveButton(id);
    setIsActiveDateSelect(optionDate[id]);
    dispatch(setCurrentPageValue(1));
    dispatch(setPage(1));
  };

  const handleSetActiveDateSelect = (optionDate: SingleValue<IOptionDateSort>) => {
    if (optionDate) {
      setIsActiveDateSelect(optionDate);
      setActiveButton(optionDate.index);
      dispatch(setCurrentPageValue(1));
      dispatch(setPage(1));
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
        sortParams: "-published_at",
        endpoint: activeTab,
        publicationDate: isActiveDateSelect.value,
      }),
    );
  }, [dispatch, page, activeTab, isActiveDateSelect.value]);

  useEffect(() => {
    if (!isAuth && activeTab === TabOne.FAVORITES) {
      navigate(ROUTE.AUTH);
    }
    if (isAuth && activeTab === TabOne.FAVORITES) {
      navigate(ROUTE.FAVORIRES);
    }
  }, [dispatch, activeTab, isAuth, navigate]);

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
          </TimeSort>
        </StyledSortPosts>
        {isPortalOpen && <RegistrationInfo label="To add post in Favorites you need to Sign in." />}
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
