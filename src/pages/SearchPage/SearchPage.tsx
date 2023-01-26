import { Main, NavigateButton, PostItem } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllPosts, getAllposts, setEndPoint, useAppDispatch, useAppSelector } from "store";
import { IPost } from "types";
import { Wrapper, SearcValue, SerchValueWrapper } from "./styles";

export const SearchPage = () => {
  const { serchValue = "" } = useParams();
  const { posts, endPoint } = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (endPoint === "favorites") {
      dispatch(setEndPoint("articles"));
    }
  }, [dispatch, endPoint]);
  useEffect(() => {
    serchValue &&
      dispatch(
        fetchAllPosts({
          page: 0,
          query: serchValue,
          sortParams: "",
          endpoint: endPoint,
        }),
      );
  }, [dispatch, serchValue, endPoint]);

  return (
    <Main>
      <NavigateButton />
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
  );
};
