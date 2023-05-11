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

const Answers = ({ setAnswers, index, setIndex, answers }) => {
  const [possibleAnswers, setPossibleAnswers] = useState();
  useEffect(() => {
    const filtered = quizAnswers.filter((answer) => {
      return answer.id === Number(answers.child);
    });
    console.log(answers);
    console.log(filtered);
    setPossibleAnswers(filtered);
  }, [index]);

  return (
    <Wrapper>
      <Container>
        {possibleAnswers &&
          possibleAnswers.map((val, index) => {
            console.log(val.child);
            return (
              <button
                key={index}
                value={val.child}
                onClick={(e) => {
                  console.log(e.target);
                  setIndex(Number(index) + 1);
                  setAnswers({ child: e.target.value });
                }}
              >
                {val.text}
              </button>
            );
          })}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default Answers;
