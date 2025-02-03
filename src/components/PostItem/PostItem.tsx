import { generatePath, Link } from "react-router-dom";
import { BsBookmark, BsBookmarkHeart } from "react-icons/bs";
import { ROUTE } from "router";
import { IPost } from "types";
import {
  Image,
  StyledDate,
  Summary,
  StyledArticle,
  TextWrapper,
  TextInfo,
  ButtonFavorite,
  Overlay,
} from "./styles";
import {
  toggleFavorite,
  getAccountInfo,
  useAppDispatch,
  useAppSelector,
  getFavorites,
  setPortalState,
} from "store";
import { memo } from "react";
interface IProps {
  post: IPost;
}

export const PostItem = memo(({ post }: IProps) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getAccountInfo);
  const { favorites } = useAppSelector(getFavorites);
  const isFavorite = favorites.find(({ id }) => id === post.id);

  const handleAddToFavorite = () => {
    if (!isAuth) {
      dispatch(setPortalState());
    }
    if (isAuth) {
      dispatch(toggleFavorite(post));
    }
  };

  return (
    <StyledArticle>
      <Link to={generatePath(ROUTE.DETAIL_POST, { id: post.id })}>
        <Overlay />
        <Image loading="lazy" src={post.image_url} alt={post.title.split(" ")[0]} />
      </Link>
      <TextWrapper>
        <TextInfo>
          <StyledDate>{new Date(post.updated_at).toLocaleDateString()}</StyledDate>
          <ButtonFavorite type="submit" onClick={handleAddToFavorite} title="add to favorites">
            {isFavorite ? <BsBookmarkHeart /> : <BsBookmark />}
          </ButtonFavorite>
        </TextInfo>
        <Link to={generatePath(ROUTE.DETAIL_POST, { id: post.id })}>
          <Summary>
            {post.title.length > 70
              ? post.title.split(" ").slice(0, 10).join(" ") + "..."
              : post.title}
          </Summary>
        </Link>
      </TextWrapper>
    </StyledArticle>
  );
});
