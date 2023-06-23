import styled from "styled-components/macro";
import engine from "../assets/svg/engine-motor.svg"

const EngineSvg = () => {
    return (
        <Container>
            <Img src={engine} alt="engine icon" />
        </Container>
    );
}

const Img = styled.img`
    width: 20px;
    height: 100%;
`

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`
export default EngineSvg;