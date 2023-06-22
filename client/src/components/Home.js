import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <NavItem
          to={"/model-finder"}
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // textDecoration: "none",
          }}
        >
          <Button>Model Finder</Button>
        </NavItem>
        <NavItem to={"/test"}>
          <Button>Test</Button>
        </NavItem>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

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

const NavItem = styled(NavLink)`
  width: 400px;
`

export default Home;
