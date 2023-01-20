import { Main, Post } from "components";
import { getFavorites, useAppDispatch, useAppSelector } from "store";
import { IPost } from "types";

export const FavoritesPage = () => {
  // const { favorites } = useAppSelector(getFavorites);
  const favorites = JSON.parse(localStorage.getItem("favorites") as string);
  const dispatch = useAppDispatch();

  return (
    <Main>
      {favorites &&
        favorites.length > 0 &&
        favorites.map((post: IPost) => {
          return <Post post={post} key={post.id} />;
        })}
    </Main>
  );
};
