import { useEffect, useState, memo } from "react";
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
  const { currentPageValue } = useAppSelector(getCurrentPage);
  const buttonVisibility = currentPageValue > 3;

  const pageValue = () => {
    if (currentPageValue <= 2) {
      return 1;
    } else if (currentPageValue > 1) {
      return currentPageValue - 1;
    }
  };

  const handleFirstPage = () => {
    dispatch(setCurrentPageValue(1));
    dispatch(setPage(0));
  };

  const handleThirdPage = () => {
    if (currentPageValue === 1) {
      dispatch(setCurrentPageValue(currentPageValue + 2));
      dispatch(setPage(page + 24));
    } else {
      dispatch(setCurrentPageValue(currentPageValue + 1));
      dispatch(setPage(page + 12));
    }
  };

  const handleNextPage = () => {
    dispatch(setCurrentPageValue(currentPageValue + 1));
    dispatch(setPage(page + 12));
  };

  const handleNextButton = () => {
    dispatch(setCurrentPageValue(currentPageValue + 1));
    dispatch(setPage(page + 12));
  };

  const handlePreviousPage = () => {
    dispatch(setCurrentPageValue(currentPageValue - 1));
    dispatch(setPage(page - 12));
  };

  const handlePreviousButton = () => {
    dispatch(setCurrentPageValue(currentPageValue - 1));
    dispatch(setPage(page - 12));
  };

  useEffect(() => {
    currentPageValue <= 1 ? setButtonPrevState(true) : setButtonPrevState(false);
    currentPageValue >= 2 ? setCurrentPageState(true) : setCurrentPageState(false);
    posts.results.length < 12 ? setButtonNextState(true) : setButtonNextState(false);
  }, [currentPageValue, posts.results.length]);

  return (
    <StyledPagination onClick={onClick}>
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
          {currentPageValue <= 1 ? 2 : currentPageValue}
        </CurentPage>

        <LastPage onClick={handleThirdPage} disabled={buttonNextState}>
          {currentPageValue < 3 ? 3 : currentPageValue + 1}
        </LastPage>
      </Pages>

      <ButtonNext onClick={handleNextButton} disabled={buttonNextState}>
        <span>Next</span>
        <span> ➡</span>
      </ButtonNext>
    </StyledPagination>
  );
});
