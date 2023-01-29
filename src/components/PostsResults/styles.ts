import styled from "styled-components";
import { Media, Indents, Typography } from "ui";
import { motion } from "framer-motion";

const StyledArticles = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  padding-bottom: ${Indents.XL};

  ${Media.XL} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${Indents.SM};
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ErrorWrapper = styled.div`
  padding: ${Indents.LG} 0;
  & img {
    display: block;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ErrorMessage = styled.h2`
  ${Typography.H2}
  padding-bottom:${Indents.SM}
`;

export { StyledArticles, ErrorWrapper, ErrorMessage };
