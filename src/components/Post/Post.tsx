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
} from "./styles";
import { toggleFavorite, getAccountInfo, useAppDispatch, useAppSelector } from "store";

interface IProps {
  post: IPost;
}

export const Post = ({ post }: IProps) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getAccountInfo);

  const handleAddToFavorite = () => {
    dispatch(toggleFavorite(post));
  };

  return (
    <StyledArticle bg={post.imageUrl}>
      <Link to={generatePath(ROUTE.DETAIL_POST, { id: post.id })}>
        <Image bg={post.imageUrl} />
      </Link>
      <TextWrapper>
        <TextInfo>
          <StyledDate>{new Date(post.publishedAt).toLocaleDateString()}</StyledDate>
          <ButtonFavorite
            type="submit"
            // onClick={handleAddToFavorite}

            onClick={(e): void => {
              e.preventDefault();
              handleAddToFavorite();
            }}
            title="add to favorites"
            // disabled={!isAuth}
          >
            <BsBookmark />
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
};
