import styled from "styled-components/macro";
import audio from "../assets/sound/audio.mp3"

const FormQuestion = ({ q, qIndex, setQIndex }) => {
    const playSound = () => {
        new Audio(audio).play()
    }

    return (
        qIndex === q.index &&
        <Fieldset>
            <Container style={{ flexDirection: "column" }}>
                <Legend><H>{q.title}</H></Legend>
                <P>{q.content}</P>
            </Container>
            <Container>
                {q.questions.map((a, index) => {
                    return (
                        <Label key={index}>
                            <Input type={q.type} name={a.title} value={a.name} />
                            <Span>{a.name}</Span>
                        </Label>
                    )
                })
                }
            </Container>
        </Fieldset>
    );
}

const P = styled.p`
width: 100%;
text-align: left;
`

const H = styled.h1`
    text-align: left;
    width: 100%;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    padding: 2em 0;
`

const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Legend = styled.legend`
    color: #ffffff;
    padding: 3px 6px;
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    display: none;

    &:checked + span{
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid #FFFFFF;
        backdrop-filter: blur(16px)
    }
`

const Label = styled.label`
    width: 400px;
    max-width: 400px;
    height: 100px;
    max-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    text-transform: capitalize;
  
`

const Span = styled.span`
    color: black;
    line-height: 2em;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--accent-secondary-color);
    /* background-color: var(--accent-primary-color); */
    backdrop-filter: blur(9px);
    color: white;
    background: inherit;
      &:hover {
        cursor: pointer;
        border: 2px solid var(--accent-secondary-color);
    }
`
export default FormQuestion;