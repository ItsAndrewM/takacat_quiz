import { useState } from "react";
import { styled } from "styled-components";
import { quiz } from "../data/quiz";
import Question from "./Question";
import Answers from "./Answers";

const ModelFinder = () => {
  const [answers, setAnswers] = useState({ child: 0 });
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <Container>
        <TrackerContainer>
          <ol>
            {quiz.map((question, index) => {
              return <li key={index}></li>;
            })}
          </ol>
        </TrackerContainer>
        <AnswerContainer>
          <Question index={index} />
          <Answers
            setAnswers={setAnswers}
            index={index}
            setIndex={setIndex}
            answers={answers}
          />
        </AnswerContainer>
      </Container>
    </Wrapper>
  );
};

const AnswerContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const TrackerContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ModelFinder;
