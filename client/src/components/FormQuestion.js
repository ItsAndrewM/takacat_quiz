import styled from "styled-components/macro";

const FormQuestion = ({ q, qIndex, setQIndex }) => {
    return (
        qIndex === q.index &&
        <Fieldset>
            <Container style={{ flexDirection: "column" }}>
                <Legend>{q.title}</Legend>
                <p style={{ color: "black" }}>{q.content}</p>
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

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;

`

const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Legend = styled.legend`
    background-color: #000;
    color: #fff;
    padding: 3px 6px;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    display: none;

    &:checked + span{
        background: blue;
        color: white;
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
    background-color: lightgrey;
    text-transform: capitalize;
  
`

const Span = styled.span`
    color: black;
    background-color: lightgrey;
    line-height: 2em;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
      &:hover {
        cursor: pointer;
        background-color: red;
    }
`
export default FormQuestion;