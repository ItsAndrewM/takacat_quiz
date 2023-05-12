import { useState } from "react";
import { styled } from "styled-components";
import { quiz } from "../data/quiz";
import Question from "./Question";
import Answers from "./Answers";
import backgroundBoat from "../assets/pexels-matheus-guimarães-611328.jpg";

const ModelFinder = () => {
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <Wrapper>
      <Container style={{ backgroundImage: `url(${backgroundBoat})` }}>
        <InnerContainer>
          <TrackerContainer>
            <ol>
              {quiz.map((question, index) => {
                if (answers[index]) {
                  if (answers[index].length) {
                    const temp = answers[index].map((val) => val.text);
                    const str = temp.toString();
                    const shortStr = str.slice(0, 17) + "...";
                    return (
                      <li key={index} title={str}>
                        {shortStr}
                      </li>
                    );
                  } else {
                    let str = answers[index].text;
                    return (
                      <li key={index}>
                        {answers[index] && answers[index].text}
                      </li>
                    );
                  }
                } else {
                  return <li key={index}></li>;
                }
              })}
            </ol>
          </TrackerContainer>
          <AnswerContainer>
            <Question questionIndex={questionIndex} />
            <Answers
              setAnswers={setAnswers}
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
              answers={answers}
            />
          </AnswerContainer>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 10px;
`;

const AnswerContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 50px;
`;

const TrackerContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 300px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 602px;
  background-position: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ModelFinder;
