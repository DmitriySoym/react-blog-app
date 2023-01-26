import { Main, NavigateButton, PostItem } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllPosts, getAllposts, useAppDispatch, useAppSelector } from "store";
import { IPost, TabOne } from "types";
import { Wrapper } from "./styles";

export const SearchPage = () => {
  const { serchValue = "" } = useParams();
  const { posts } = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    serchValue &&
      dispatch(
        fetchAllPosts({
          page: 0,
          query: serchValue,
          sortParams: "",
          endpoint: TabOne.ARTICLE,
        }),
      );
  }, [dispatch, serchValue]);

  return (
    <Main>
      <NavigateButton />
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
