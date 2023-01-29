import { Main, PostItem, NavigateButton } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites, setEndPoint, useAppDispatch, useAppSelector } from "store";
import { IPost, TabOne } from "types";
import { FavoritesRow, EmptyList } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(setEndPoint(TabOne.ARTICLE));
  }, [dispatch]);
  return (
    <Main>
      <NavigateButton onclick={handleBack} />
      <FavoritesRow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.6 }}
      >
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
