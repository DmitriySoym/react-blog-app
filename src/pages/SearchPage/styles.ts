import styled from "styled-components";
import { Indents, Media, Typography } from "ui";
import { motion } from "framer-motion";

const Wrapper = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  padding-bottom: ${Indents.XL};
  padding-top: ${Indents.XL};

  ${Media.XL} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${Indents.SM};
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SearcValue = styled.div`
  ${Typography.H3}
`;

const SerchValueWrapper = styled.span`
  font-size: 22px;
`;

const NoResultMessage = styled.h2`
  grid-column: 1 / 4;
  ${Typography.H3};
  padding-bottom: ${Indents.SM};
  text-align: center;
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

export { Wrapper, SearcValue, SerchValueWrapper, NoResultMessage, ErrorWrapper, ErrorMessage };
