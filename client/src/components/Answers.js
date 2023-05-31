import { useEffect, useState } from "react";
import { quizAnswers } from "../data/quizAnswers";
import alpineRockClimbing from "../assets/2alpine-rock-climbing-white_desktop_2x_desktop_0308.png";
import hikingTrekking from "../assets/3hiking-and-trekking-white_desktop_2x_desktop_0308.png";
import everyday from "../assets/6everyday-white_desktop_2x_desktop_0308.png";
import skiingSnowboarding from "../assets/4skiing-and-snowboarding-white_desktop_2x_desktop_0308.png";
import severe from "../assets/3severe-weather-white_desktop_2x_desktop_0308.png";
import cold from "../assets/6cold-white_desktop_2x_desktop_0308.png";
import variable from "../assets/2variable-weather-white_desktop_2x_desktop_0308.png";
import mild from "../assets/1mild-weather-white_desktop_2x_desktop_0308.png";
import insulatedJacket from "../assets/1insulated-jacket-white_desktop_2x_desktop_0308.png";
import shellJacket from "../assets/2shell-jacket-white_desktop_2x_desktop_0308.png";
import insulatedShell from "../assets/insulated-shell-jacket-black_desktop_2x_desktop_default_0330.png";
import helmetCompatible from "../assets/4helmet-compatible-white_desktop_2x_desktop_0308.png";
import dontMind from "../assets/5dont-mind-white_desktop_2x_desktop_0308.png";
import nonHelmetCompatible from "../assets/3non-helmet-compatible-white_desktop_2x_desktop_0308.png";
import noHood from "../assets/2no-hood-white_desktop_2x_desktop_0308.png";
import { styled } from "styled-components";
import ActiveButton from "./ActiveButton";

const Answers = ({
  setAnswers,
  questionIndex,
  setQuestionIndex,
  answers,
  setChoice,
}) => {
  const [possibleAnswers, setPossibleAnswers] = useState();
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const filtered = quizAnswers.filter((answer) => {
      if (answers[0] && Number(questionIndex) !== 0 && !answer.length) {
        return (
          answer.choicesId === questionIndex &&
          answer.id === answers[questionIndex - 1].child
        );
      } else if (answer.length) {
        return (
          answer.choicesId === questionIndex &&
          answer.id === answers[questionIndex - 1].child
        );
      } else {
        return answer.choicesId === questionIndex;
      }
    });
    console.log(filtered)
    setPossibleAnswers(filtered[0]);
    setChoice(filtered[0].choicesId);
  }, [questionIndex]);

  useEffect(() => {
    if (possibleAnswers || multipleChoiceAnswers) {
      setIsDisabled(!isDisabled);
    }
  }, [questionIndex, possibleAnswers, multipleChoiceAnswers]);

  const handleBack = (e) => {
    e.preventDefault();
    setQuestionIndex(Number(questionIndex) - 1);
    const temp = answers;
    const arr = temp.slice(0, Number(questionIndex) - 1);
    setAnswers(arr);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setIsDisabled(false);
    setQuestionIndex(Number(questionIndex) + 1);
    let find = {};
    quizAnswers.forEach((ele) => {
      ele.questions.forEach((element) => {
        if (element._id === Number(e.target.value)) {
          find = element;
        }
      });
    });
    const arr = [...new Set(answers)];
    arr.push(find);
    setAnswers(arr);
  };

  const handleAddMc = (e) => {
    e.preventDefault();
    setQuestionIndex(Number(questionIndex) + 1);
    const arr = [...new Set(answers)];
    arr.push(multipleChoiceAnswers);
    setAnswers(arr);
  };

  return (
    <Wrapper>
      <Container>
        {possibleAnswers &&
          possibleAnswers.questions &&
          possibleAnswers.questions.map((val, index) => {
            if (val.multipleChoice) {
              return (
                <ActiveButton
                  key={index}
                  v={val._id}
                  text={val.text}
                  setQuestionIndex={setQuestionIndex}
                  questionIndex={questionIndex}
                  quizAnswers={quizAnswers}
                  answers={answers}
                  setAnswers={setAnswers}
                  setMultipleChoiceAnswers={setMultipleChoiceAnswers}
                  multipleChoiceAnswers={multipleChoiceAnswers}
                  questions={possibleAnswers.questions}
                />
              );
            } else {
              return (
                <button key={index} value={val._id} onClick={handleAdd}>
                  {val.text}
                </button>
              );
            }
          })}
      </Container>
      <OutterContainer>
        {Number(questionIndex) !== 0 && (
          <Button onClick={handleBack}>Back</Button>
        )}
        {multipleChoiceAnswers[0] ? (
          <Button onClick={handleAddMc} disabled={isDisabled}>
            Next
          </Button>
        ) : (
          <Button
            disabled={isDisabled}
            onClick={(e) => setQuestionIndex(Number(questionIndex) + 1)}
          >
            Next
          </Button>
        )}
      </OutterContainer>
    </Wrapper>
  );
};

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #c0c0c0;
  &:hover {
    opacity: 0.5;
    border: 1px solid var(--accent-secondary-color);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const OutterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Answers;
