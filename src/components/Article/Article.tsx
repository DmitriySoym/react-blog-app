import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IArticle } from "types";
import { Image, StyledDate, Summary, StyledArticle, TextWrapper } from "./styles";

interface IProps {
  article: IArticle;
}

export const Article = ({ article }: IProps) => {
  return (
    <StyledArticle bg={article.imageUrl}>
      <Link to={generatePath(ROUTE.DETAIL_POST, { id: article.id })}>
        <Image bg={article.imageUrl} />
        <TextWrapper>
          <StyledDate>{new Date(article.publishedAt).toLocaleDateString()}</StyledDate>
          <Summary>
            {article.title.length > 70
              ? article.title.split(" ").slice(0, 10).join(" ") + "..."
              : article.title}
          </Summary>
        </TextWrapper>
      </Link>
    </StyledArticle>
  );
};
