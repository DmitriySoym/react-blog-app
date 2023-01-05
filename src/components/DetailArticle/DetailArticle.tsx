import { IArticle } from "types";
import { Title, Image, Text } from "./styles";

interface IProps {
  article: IArticle;
}

export const DetailArticle = ({ article }: IProps) => {
  return (
    <div>
      <Title>{article.title}</Title>
      <Image src={article.imageUrl} alt={article.title} />
      <Text>{article.summary}</Text>
    </div>
  );
};
