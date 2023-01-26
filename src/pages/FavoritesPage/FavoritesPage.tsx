import { Main, PostItem, NavigateButton } from "components";

import { getFavorites, useAppSelector } from "store";
import { IPost } from "types";
import { FavoritesRow, EmptyList } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);

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
