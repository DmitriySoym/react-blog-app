import { Main, PostItem, NavigateButton, Pagination } from "components";
import { useEffect } from "react";

import { getAllposts, getFavorites, setEndPoint, useAppDispatch, useAppSelector } from "store";
import { IPost, TabOne } from "types";
import { FavoritesRow, EmptyList } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);
  const { endPoint } = useAppSelector(getAllposts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setEndPoint(TabOne.ARTICLE));
  }, []);
  return (
    <Main>
      <NavigateButton />
      <FavoritesRow>
        {favorites.length === 0 && <EmptyList>You have no favorite posts</EmptyList>}
        {favorites &&
          favorites.length > 0 &&
          favorites.map((post: IPost) => {
            return <PostItem post={post} key={post.id} />;
          })}
      </FavoritesRow>
    </Main>
  );
};
