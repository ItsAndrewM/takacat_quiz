import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { quiz } from "../data/quiz";

const Question = ({ questionIndex, choice }) => {
  const [quizQ, setQuizQ] = useState(
    quiz.find((ele) => {
      return ele.choicesId === choice;
    })
  );

  useEffect(() => {
    const filtered = quiz.find((ele) => {
      return ele.choicesId === choice;
    });
    setQuizQ(filtered);
  }, [choice]);

  return (
    <Wrapper>
      {quizQ && (
        <>
          <H>{quizQ.title}</H>
          {quizQ.content && <P>{quizQ.content}</P>}
        </>
      )}
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
