import styled from "styled-components/macro";

const AccessoryCard = ({ val }) => {
    return (<CardWrapper>

        <H>{val.name}</H>
        <ImageWrapper>
            <Img src={val.images[0].src} />
        </ImageWrapper>

    </CardWrapper>);
}

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 500px;
  max-width: 100%;
  height: 350px;
  max-height: 250px;
  object-fit: contain;
  border-radius: 5px;
`

const H = styled.h3`
    color: black;
    width: 100%;
    text-align: center;
`

const CardWrapper = styled.div`
  width: 40%;
  height: 30%;
  margin: 3%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
`
export default AccessoryCard;