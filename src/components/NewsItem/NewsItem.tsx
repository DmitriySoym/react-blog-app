import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { INews } from "types/types";
import { StyledNewsItem, Image, TextWrapper, StyledDate, Summary } from "./styles";

interface IProps {
  news: INews;
}

export const NewsItem = ({ news }: IProps) => {
  return (
    <StyledNewsItem bg={news.imageUrl}>
      <Link to={generatePath(ROUTE.DETAIL_NEWS, { id: news.id })}>
        <Image bg={news.imageUrl} />
        <TextWrapper>
          <StyledDate>{new Date(news.publishedAt).toLocaleDateString()}</StyledDate>
          <Summary>
            {news.title.length > 70
              ? news.title.split(" ").slice(0, 10).join(" ") + "..."
              : news.title}
          </Summary>
        </TextWrapper>
      </Link>
    </StyledNewsItem>
  );
};
