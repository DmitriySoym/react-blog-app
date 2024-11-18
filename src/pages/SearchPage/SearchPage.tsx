import { Main, NavigateButton, Pagination, PostItem, Spinner } from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "router";
import {
  fetchAllPosts,
  getAllposts,
  setEndPoint,
  useAppDispatch,
  useAppSelector,
  setCurrentPageValue,
} from "store";
import { IPost } from "types";
import errorImg from "../../assets/img/error.gif";
import {
  Wrapper,
  SearcValue,
  SerchValueWrapper,
  NoResultMessage,
  ErrorWrapper,
  ErrorMessage,
} from "./styles";

export const SearchPage = () => {
  const { serchValue = "" } = useParams();
  const { posts, endPoint, page, isLoading, error } = useAppSelector(getAllposts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBack = () => {
    navigate(ROUTE.HOME);
    dispatch(setEndPoint("articles"));
  };

  useEffect(() => {
    dispatch(setCurrentPageValue(1));
  }, [dispatch]);

  useEffect(() => {
    if (endPoint === "favorites") {
      dispatch(setEndPoint("articles"));
    }
  }, [dispatch, endPoint]);

  useEffect(() => {
    const serchPeriod = new Date(3600 * 24 * 1000);
    serchValue &&
      dispatch(
        fetchAllPosts({
          page: page,
          query: serchValue,
          sortParams: "",
          endpoint: endPoint,
          publicationDate: serchPeriod,
        }),
      );
  }, [dispatch, serchValue, endPoint, page]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <ErrorWrapper>
        <ErrorMessage>Sorry, something went wrong... The page could not be loaded.</ErrorMessage>
        <img src={errorImg} alt="error" />
      </ErrorWrapper>
    );
  }
  return (
    <>
      <Main>
        <NavigateButton onclick={handleBack} />
        <SearcValue>
          You are looking for: <SerchValueWrapper>{serchValue}</SerchValueWrapper>
        </SearcValue>
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.8 }}
        >
          {posts && posts.results.length > 0 ? (
            posts.results.map((post: IPost) => {
              return <PostItem post={post} key={post.id} />;
            })
          ) : (
            <NoResultMessage>Sorry. There are no posts according to your request</NoResultMessage>
          )}
        </Wrapper>
      </Main>
      <Pagination
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
};
