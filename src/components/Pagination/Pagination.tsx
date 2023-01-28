import { useEffect, useState, memo } from "react";
import { fetchAllPosts, getAllposts, setPage, useAppDispatch, useAppSelector } from "store";

import {
  StyledPagination,
  ButtonPrev,
  ButtonNext,
  Pages,
  Page,
  CurentPage,
  LastPage,
  Dots,
  FirstPage,
} from "./styles";

interface IProps {
  onClick: () => void;
}

export const Pagination = memo(({ onClick }: IProps) => {
  const dispatch = useAppDispatch();
  const [buttonPrevState, setButtonPrevState] = useState<boolean>(true);
  const [buttonNextState, setButtonNextState] = useState<boolean>(true);
  const [currentPageState, setCurrentPageState] = useState<boolean>(false);
  const { posts, page } = useAppSelector(getAllposts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const buttonVisibility = currentPage > 2;

  const handleFirstPage = () => {
    setCurrentPage(1);
    dispatch(setPage(0));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    dispatch(setPage(page + 12));
  };

  const handleTherdPage = () => {
    console.log(currentPage);
    if (currentPage === 0) {
      setCurrentPage(currentPage + 2);
      dispatch(setPage(page + 24));
    } else {
      setCurrentPage(currentPage + 1);
      dispatch(setPage(page + 12));
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    dispatch(setPage(page - 12));
  };

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    dispatch(setPage(page + 12));
  };

  const handlePreviousButton = () => {
    setCurrentPage(currentPage - 1);
    dispatch(setPage(page - 12));
  };

  useEffect(() => {
    currentPage === 0 ? setButtonPrevState(true) : setButtonPrevState(false);
    currentPage === 0 ? setCurrentPageState(false) : setCurrentPageState(true);
    posts.length < 12 ? setButtonNextState(true) : setButtonNextState(false);
  }, [currentPage, posts.length]);

  const pageValue = () => {
    if (currentPage <= 1) {
      return 1;
    }
    if (currentPage > 1) {
      return currentPage;
    }
  };
  useEffect(() => {
    if (page === 0) {
      return setCurrentPage(page);
    }
  });
  return (
    <StyledPagination>
      <ButtonPrev onClick={handlePreviousButton} disabled={buttonPrevState}>
        <span>⬅ </span>
        <span>Prev</span>
      </ButtonPrev>
      <Pages>
        <FirstPage visible={buttonVisibility} onClick={handleFirstPage}>
          1
        </FirstPage>
        <Dots visible={buttonVisibility}>...</Dots>
        <Page onClick={handlePreviousPage} disabled={buttonPrevState}>
          {pageValue()}
        </Page>

        <CurentPage
          disabled={currentPageState}
          disableColor={buttonNextState}
          onClick={handleNextPage}
        >
          {currentPage <= 1 ? 2 : currentPage + 1}
        </CurentPage>

        <LastPage onClick={handleTherdPage} disabled={buttonNextState}>
          {currentPage <= 1 ? 3 : currentPage + 2}
        </LastPage>
      </Pages>

      <ButtonNext onClick={handleNextButton} disabled={buttonNextState}>
        <span>Next</span>
        <span> ➡</span>
      </ButtonNext>
    </StyledPagination>
  );
});
