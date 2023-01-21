import { BsBookmark, BsBookmarkHeart } from "react-icons/bs";
import {
  getAccountInfo,
  getFavorites,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from "store";
import { IPost } from "types";
import { Title, Image, Text, Wrapper, OriginNews, ButtonFavorite, ButtonsRow } from "./styles";

interface IProps {
  post: IPost;
}

export const DetailNews = ({ post }: IProps) => {
  const { title, imageUrl, summary, url } = post;
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(getFavorites);
  const { isAuth } = useAppSelector(getAccountInfo);
  const isFavorite = favorites.map((post) => post.id).find((id) => id === post.id);

  const handleAddToFavorite = () => {
    dispatch(toggleFavorite(post));
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={imageUrl} alt={title} />
      <Text>{summary}</Text>
      <ButtonsRow>
        <OriginNews href={url} target="_blank">
          Read origin news
        </OriginNews>
        <ButtonFavorite
          type="submit"
          onClick={handleAddToFavorite}
          title="add to favorites"
          disabled={!isAuth}
        >
          {isFavorite ? <BsBookmarkHeart /> : <BsBookmark />}
        </ButtonFavorite>
      </ButtonsRow>
    </Wrapper>
  );
};
