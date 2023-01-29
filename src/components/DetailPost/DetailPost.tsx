import { RegistrationInfo } from "components";
import { BsBookmark, BsBookmarkHeart } from "react-icons/bs";
import {
  getAccountInfo,
  getFavorites,
  getPortalState,
  setPortalState,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from "store";
import { IPost } from "types";
import { Title, Image, Text, OriginArticle, Wrapper, ButtonFavorite, ButtonsRow } from "./styles";
import { memo } from "react";

interface IProps {
  post: IPost;
}

export const DetailPost = memo(({ post }: IProps) => {
  const { title, imageUrl, summary, url } = post;
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(getFavorites);
  const { isAuth } = useAppSelector(getAccountInfo);
  const { isPortalOpen } = useAppSelector(getPortalState);
  const isFavorite = favorites.find(({ id }) => id === post.id);

  const handleClosePortal = () => {
    dispatch(setPortalState());
  };

  const handleAddToFavorite = () => {
    if (!isAuth) {
      dispatch(setPortalState());
    }
    if (isAuth) {
      dispatch(toggleFavorite(post));
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={imageUrl} alt={title} />
      <Text>{summary}</Text>
      <ButtonsRow>
        <OriginArticle href={url} target="_blank">
          Read origin article
        </OriginArticle>
        <ButtonFavorite type="submit" onClick={handleAddToFavorite} title="add to favorites">
          {isFavorite ? <BsBookmarkHeart /> : <BsBookmark />}
        </ButtonFavorite>
      </ButtonsRow>
      {isPortalOpen && (
        <RegistrationInfo
          onClick={handleClosePortal}
          label="To add post in Favorites you need to Sign in."
        />
      )}
    </Wrapper>
  );
});
