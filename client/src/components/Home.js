import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <NavLink
        to={"/model-finder"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Button>Model Finder</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Button = styled.button`
  background: #18a0fb;
  border-radius: 6px;
  padding: 5px 10px;
  text-align: center;
  color: #ffffff;
  &:hover {
    background-color: #18d5fb;
    cursor: pointer;
  }
`;

export default Home;
