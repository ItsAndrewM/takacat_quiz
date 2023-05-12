import { styled } from "styled-components";
import { quiz } from "../data/quiz";

const Question = ({ questionIndex }) => {
  return (
    <Wrapper>
      <H>{quiz[questionIndex].title}</H>
      {quiz[questionIndex].content && <P>{quiz[questionIndex].content}</P>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const H = styled.h1`
  width: 100%;
  text-align: left;
`;

const P = styled.p`
  width: 100%;
  text-align: left;
`;

export default Question;
