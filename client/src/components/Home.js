import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <NavLink to={"/model-finder"}>
        <Button>Model Finder</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

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
