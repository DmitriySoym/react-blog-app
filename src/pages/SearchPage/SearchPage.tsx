import { Main, NavigateButton, Pagination, PostItem } from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "router";
import { fetchAllPosts, getAllposts, setEndPoint, useAppDispatch, useAppSelector } from "store";
import { IPost } from "types";
import { Wrapper, SearcValue, SerchValueWrapper } from "./styles";

export const SearchPage = () => {
  const { serchValue = "" } = useParams();
  const { posts, endPoint, page } = useAppSelector(getAllposts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const serchPeriod = new Date(3600 * 24 * 1000);
  const handleBack = () => {
    navigate(ROUTE.HOME);
    dispatch(setEndPoint("articles"));
  };

  useEffect(() => {
    if (endPoint === "favorites") {
      dispatch(setEndPoint("articles"));
    }
  }, [dispatch, endPoint]);

  useEffect(() => {
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

  return (
    <>
      <Main>
        <NavigateButton onclick={handleBack} />
        <SearcValue>
          You are looking for: <SerchValueWrapper>{serchValue}</SerchValueWrapper>
        </SearcValue>
        <Wrapper>
          {posts &&
            posts.length > 0 &&
            posts.map((post: IPost) => {
              return <PostItem post={post} key={post.id} />;
            })}
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
