import { Main } from "components";
import notFound from "../../assets/img/not-found-page.jpeg";
import { Picture, Wrapper } from "./styles";

export const NotFoundPage = () => {
  return (
    <Main>
      <Wrapper>
        <Picture src={notFound} alt="Page not found" />
      </Wrapper>
    </Main>
  );
};
