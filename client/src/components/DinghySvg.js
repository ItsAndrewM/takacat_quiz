import styled from "styled-components/macro";
import dinghy from "../assets/svg/dinghy-takacat.svg"

const DinghySvg = () => {

    return (
        <Container>
            <Img src={dinghy} alt="dinghy icon" />
        </Container>
    );
}

const Img = styled.img`
    width: 20px;
    height: 100%;
    transform: rotate(-90deg);
`

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`
export default DinghySvg;