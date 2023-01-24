import { useEffect, useState } from "react";
import { spaceBlogApi } from "services";
import { fetchArticles, fetchNews, useAppDispatch } from "store";

import {
  StyledPagination,
  ButtonPrev,
  ButtonNext,
  Pages,
  FirstPage,
  SecondPage,
  LastPage,
} from "./styles";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState({ page: 1, current: 1 });
  const [buttonPrevState, setButtonPrevState] = useState<boolean>(true);
  const [currentPageState, setCurrentPageState] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState<number>();

  const handleCurrentPage = () => {
    setCurrentPage({
      page: currentPage.page,
      current: currentPage.current,
    });
  };

  const handleFirsttPage = () => {
    setCurrentPage({
      page: 1,
      current: 1,
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage({
      page: currentPage.page - 12,
      current: currentPage.current - 1,
    });
  };

  const handleNextPage = () => {
    setCurrentPage({
      page: currentPage.page + 12,
      current: currentPage.current + 1,
    });
  };

  useEffect(() => {
    currentPage.current === 1 ? setButtonPrevState(true) : setButtonPrevState(false);
    currentPage.current !== 1 ? setCurrentPageState(true) : setCurrentPageState(false);
  }, [currentPage.current]);

  useEffect(() => {
    dispatch(fetchArticles({ page: currentPage.page, query: "" }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage.page, query: "" }));
  }, [dispatch, currentPage]);

  return (
    <StyledPagination>
      <ButtonPrev onClick={handlePreviousPage} disabled={buttonPrevState}>
        <span>⬅ </span>
        <span>Prev</span>
      </ButtonPrev>
      <Pages>
        <FirstPage onClick={handleFirsttPage} disabled={buttonPrevState}>
          1
        </FirstPage>
        <SecondPage disabled={currentPageState}>
          {currentPage.current === 1 ? 2 : currentPage.current}
        </SecondPage>
        <LastPage>{lastPage}</LastPage>
      </Pages>
      <ButtonNext onClick={handleNextPage}>
        <span>Next</span>
        <span> ➡</span>
      </ButtonNext>
    </StyledPagination>
  );
};
