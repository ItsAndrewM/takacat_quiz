import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ActiveButton = ({
  v,
  text,
  setQuestionIndex,
  questionIndex,
  quizAnswers,
  answers,
  setAnswers,
  setMultipleChoiceAnswers,
  multipleChoiceAnswers,
  questions,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, [questionIndex]);

  const handleActiveClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
    const active = multipleChoiceAnswers.find((ele) => {
      return ele._id === Number(e.target.value);
    });
    if (active) {
      const filteredOut = multipleChoiceAnswers.filter((ele) => {
        return ele._id !== active._id
      })
      setMultipleChoiceAnswers(filteredOut)
    }
    else {
      const find = questions.find((ele) => {
        return ele._id === Number(e.target.value);
      });
      const temp = [...new Set(multipleChoiceAnswers)];
      temp.push(find);
      setMultipleChoiceAnswers([...new Set(temp)]);
    }

    // setQuestionIndex(Number(questionIndex) + 1);
    // const find = quizAnswers.find((ele) => {
    //   return ele._id === Number(e.target.value);
    // });
    // const arr = [...new Set(answers)];
    // arr.push(find);
    // setAnswers(arr);
  };

  return (
    <Button
      value={v}
      style={
        isActive
          ? {
            background: "rgba(255, 255, 255, 0.8)",
            border: "1px solid #FFFFFF",
            backdropFilter: "blur(16px)",
          }
          : {}
      }
      onClick={handleActiveClick}
    >
      {text}
    </Button>
  );
};

const Button = styled.button``;
export default ActiveButton;
