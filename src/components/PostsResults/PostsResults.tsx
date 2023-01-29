import { PostItem, Spinner } from "components";
import { IPost } from "types";
import { StyledArticles, ErrorWrapper, ErrorMessage } from "./styles";
import errorImg from "../../assets/img/error.gif";
import { getAllposts, useAppSelector } from "store";
import { memo } from "react";

interface IProps {
  posts: IPost[];
}

export const PostsResults = memo(({ posts }: IProps) => {
  const { isLoading, error } = useAppSelector(getAllposts);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <ErrorWrapper>
        <ErrorMessage>Sorry, something went wrong... The page could not be loaded.</ErrorMessage>
        <img src={errorImg} alt="error" />
      </ErrorWrapper>
    );
  }
  return (
    <StyledArticles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.6 }}
    >
      {posts &&
        posts.length > 0 &&
        posts.map((post: IPost) => {
          return <PostItem post={post} key={post.id} />;
        })}
    </StyledArticles>
  );
});
