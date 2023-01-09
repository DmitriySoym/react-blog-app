import { IArticle } from "types";
import { Title, Image, Text, OriginArticle, Wrapper } from "./styles";

interface IProps {
  article: IArticle;
}

export const DetailArticle = ({ article }: IProps) => {
  return (
    <Wrapper>
      <Title>{article.title}</Title>
      <Image src={article.imageUrl} alt={article.title} />
      <Text>{article.summary}</Text>
      <OriginArticle href={article.url} target="_blank">
        Read origin article
      </OriginArticle>
    </Wrapper>
  );
};
