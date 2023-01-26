import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllPosts, getAllposts, setPage, useAppDispatch, useAppSelector } from "store";

import {
  StyledPagination,
  ButtonPrev,
  ButtonNext,
  Pages,
  Page,
  CurentPage,
  LastPage,
} from "./styles";

interface IProps {
  handleNextPage: () => void;
  // onClik: () => void;
  // handlePreviousPage: () => void;
}

export const Pagination = () => {
  const dispatch = useAppDispatch();
  // const [currentPage, setCurrentPage] = useState({ page: 1, current: 1 });
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [postsGrop, setPostsGroup] = useState<number>(12);
  const [buttonPrevState, setButtonPrevState] = useState<boolean>(true);
  const [buttonNextState, setButtonNextState] = useState<boolean>(true);
  const [currentPageState, setCurrentPageState] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState<number>();
  const {
    posts,
    page,
    endPoint,
    searchParams: { searchQuery },
    sortParams: { sortQuery },
  } = useAppSelector(getAllposts);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setPostsGroup(postsGrop + 12);
    dispatch(setPage(currentPage + 1));
  };

  const handlePreviousPage = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
    setPostsGroup(postsGrop - 12);
    dispatch(setPage(currentPage - 1));
  };

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    setPostsGroup(postsGrop + 12);
    dispatch(setPage(currentPage + 1));
  };

  const handlePreviousButton = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
    setPostsGroup(postsGrop - 12);
    dispatch(setPage(currentPage - 1));
  };

  //-------------
  // const handleCurrentPage = () => {
  //   setCurrentPage({
  //     page: currentPage.page,
  //     current: currentPage.current,
  //   });
  // };

  // const handleFirsttPage = () => {
  //   setCurrentPage({
  //     page: 1,
  //     current: 1,
  //   });
  // };

  useEffect(() => {
    currentPage === 0 ? setButtonPrevState(true) : setButtonPrevState(false);
    currentPage !== 0 ? setCurrentPageState(true) : setCurrentPageState(false);
    posts.length < 12 ? setButtonNextState(true) : setButtonNextState(false);
  }, [currentPage, posts.length]);

  useEffect(() => {
    dispatch(
      fetchAllPosts({
        page: page,
        query: "",
        sortParams: "",
        endpoint: endPoint,
      }),
    );
  }, [dispatch, page]);

  // useEffect(() => {
  //   dispatch(fetchNews({ page: currentPage.page, query: "", sortParams: "" }));
  // }, [dispatch, currentPage]);

  return (
    <StyledPagination>
      <ButtonPrev onClick={handlePreviousButton} disabled={buttonPrevState}>
        <span>⬅ </span>
        <span>Prev</span>
      </ButtonPrev>
      <Pages>
        <Page onClick={handlePreviousPage} disabled={buttonPrevState}>
          {currentPage > 1 ? currentPage - 1 : 1}
        </Page>

        <CurentPage disabled={currentPageState}>{currentPage > 1 ? currentPage : 2}</CurentPage>

        <Page onClick={handleNextPage}> {currentPage < 1 ? currentPage + 3 : currentPage + 2}</Page>
      </Pages>

      <ButtonNext onClick={handleNextButton}>
        <span>Next</span>
        <span> ➡</span>
      </ButtonNext>
    </StyledPagination>
  );
};
