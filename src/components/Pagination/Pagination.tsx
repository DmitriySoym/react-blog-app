import { useEffect, useState, memo, useCallback } from "react";
import {
  getAllposts,
  setPage,
  useAppDispatch,
  useAppSelector,
  setCurrentPageValue,
  getCurrentPage,
} from "store";

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
  ThirdPage,
} from "./styles";

interface IProps {
  onClick: () => void;
}

const POSTS_PER_PAGE = 12;

export const Pagination = memo(({ onClick }: IProps) => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(getAllposts);
  const { currentPageValue } = useAppSelector(getCurrentPage);

  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState<boolean>(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState<boolean>(true);
  const [isCurrentPageDisabled, setIsCurrentPageDisabled] = useState<boolean>(false);

  const totalPages = Math.ceil(posts.count / POSTS_PER_PAGE);
  const isFirstPageVisible = currentPageValue > 3;
  const shouldShowDots = totalPages > 4;

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > totalPages) return;
      dispatch(setCurrentPageValue(newPage));
      dispatch(setPage((newPage - 1) * POSTS_PER_PAGE));
    },
    [dispatch, totalPages],
  );

  const handleFirstPage = () => handlePageChange(1);

  const handlePreviousPage = () => handlePageChange(currentPageValue - 1);

  const handleNextPage = () => {
    handlePageChange(currentPageValue + 1);
  };

  const handleThirdPage = () => {
    const newPage = currentPageValue === 1 ? currentPageValue + 2 : currentPageValue + 1;
    handlePageChange(newPage);
  };

  const handleLastdPage = () => {
    handlePageChange(totalPages);
  };

  const getPageValue = () => {
    return currentPageValue <= 2 ? 1 : currentPageValue - 1;
  };

  useEffect(() => {
    setIsPrevButtonDisabled(currentPageValue <= 1);
    setIsCurrentPageDisabled(currentPageValue >= 2);
    setIsNextButtonDisabled(
      currentPageValue >= totalPages || posts.results.length < POSTS_PER_PAGE,
    );
  }, [currentPageValue, posts.results.length, totalPages]);

  if (posts.count === 0 || totalPages <= 1) {
    return null;
  }

  return (
    <StyledPagination onClick={onClick}>
      <ButtonPrev onClick={handlePreviousPage} disabled={isPrevButtonDisabled}>
        <span>⬅ </span>
        <span>Prev</span>
      </ButtonPrev>
      <Pages>
        <FirstPage visible={isFirstPageVisible} onClick={handleFirstPage}>
          1
        </FirstPage>

        <Dots visible={isFirstPageVisible && shouldShowDots}>...</Dots>

        <Page onClick={handlePreviousPage} disabled={isPrevButtonDisabled}>
          {getPageValue()}
        </Page>

        <CurentPage
          disabled={isCurrentPageDisabled}
          disableColor={isNextButtonDisabled}
          onClick={handleNextPage}
        >
          {currentPageValue <= 1 ? 2 : currentPageValue}
        </CurentPage>

        <ThirdPage
          onClick={handleThirdPage}
          visible={totalPages > 2 && currentPageValue + 1 < totalPages}
        >
          {currentPageValue < 3 ? 3 : currentPageValue + 1}
        </ThirdPage>

        <Dots visible={shouldShowDots && currentPageValue + 2 < totalPages}>...</Dots>

        <LastPage
          onClick={handleLastdPage}
          visible={totalPages > 3 && currentPageValue !== totalPages}
        >
          {totalPages}
        </LastPage>
      </Pages>

      <ButtonNext onClick={handleNextPage} disabled={isNextButtonDisabled}>
        <span>Next</span>
        <span> ➡</span>
      </ButtonNext>
    </StyledPagination>
  );
});
