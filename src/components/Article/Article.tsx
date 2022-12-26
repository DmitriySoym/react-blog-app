import { IArticle } from "types";
import { Image, StyledDate, Summary, StyledArticle, TextWrapper } from "./styles";

interface IProps {
  article: IArticle;
}

export const Article = ({ article }: IProps) => {
  return (
    <StyledArticle>
      <Image src={article.imageUrl} alt={article.newSite} />
      <TextWrapper>
        <StyledDate>{new Date(article.publishedAt).toLocaleDateString()}</StyledDate>
        <Summary>
          {article.title.length > 70
            ? article.title.split(" ").slice(0, 10).join(" ") + "..."
            : article.title}
        </Summary>
      </TextWrapper>
    </StyledArticle>
  );
};
