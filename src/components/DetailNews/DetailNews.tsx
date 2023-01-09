import { INews } from "types";
import { Title, Image, Text, Wrapper, OriginNews } from "./styles";

interface IProps {
  news: INews;
}

export const DetailNews = ({ news }: IProps) => {
  return (
    <Wrapper>
      <Title>{news.title}</Title>
      <Image src={news.imageUrl} alt={news.title} />
      <Text>{news.summary}</Text>
      <OriginNews href={news.url} target="_blank">
        Read origin news
      </OriginNews>
    </Wrapper>
  );
};
