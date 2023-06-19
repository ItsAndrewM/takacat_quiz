import styled from "styled-components/macro";
import { takaQuiz } from "../data/takaQuiz";
import FormQuestion from "./FormQuestion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
    const [formData, setFormData] = useState({});
    const [qIndex, setQIndex] = useState(0);
    let arr = [];
    const navigate = useNavigate();


    const handleChange = (e) => {
        //fix this so it checks if use case exists and add/subtract string from value
        const find = takaQuiz.find((val) => {
            return val.key === e.target.name
        })
        if (find.type === "checkbox") {
            const exists = arr.find((val) => {
                return e.target.value === val;
            })
            if (exists) {
                const filteredOut = arr.filter((val) => {
                    return e.target.value !== val;
                })
                arr = filteredOut
                setFormData({ [e.target.name]: arr });
            }
            else {
                arr.push(e.target.value);
            }
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    const handleNext = (e) => {
        if (arr.length !== 0) {
            setFormData({ ...formData, "useCase": arr });
        }
        e.preventDefault();
        setQIndex(qIndex + 1);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/confirmation", { state: { formData: formData } })
    }

    const handleBack = (e) => {
        e.preventDefault();
        if (qIndex !== 0) {
            setQIndex(qIndex - 1);
        }
    }
    return (
        <Wrapper>
            <Form onChange={handleChange} onSubmit={handleSubmit} target="_blank">
                {qIndex === 0 &&
                    <Fieldset >
                        <Legend >Takacat Boat Model Finder</Legend>
                        <p style={{ color: "black" }}>Takacat boats embody the spirit of adventure and deliver an unparalleled on-water experience. With their exceptional versatility, stability, comfort, durability, and user-friendly design, Takacat day boats are the perfect choice for water enthusiasts seeking excitement and unforgettable moments. Find what’s right for you.</p>
                        <Button onClick={(e) => { e.preventDefault(); setQIndex(1); console.log(qIndex) }}>Start</Button>
                    </Fieldset>
                }
                {takaQuiz.map((q, index) => {
                    return (
                        <FormQuestion q={q} key={index} qIndex={qIndex} setQIndex={setQIndex} />
                    )
                })}
                {qIndex === takaQuiz.length ?
                    <SubmitInput type="submit" style={{ border: "1px solid black", color: "black" }} value="Submit" />
                    :
                    <Container>
                        <Button onClick={handleBack}>Previous</Button>
                        <Button onClick={handleNext}>Next</Button>
                    </Container>
                }
            </Form>
        </Wrapper>
    );
}

const SubmitInput = styled.input`
    width: 400px;
    max-width: 400px;
    height: 100px;
    max-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    text-transform: capitalize;
    &:hover {
        background-color: red;
        cursor: pointer;
    }

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

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;

`

const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
`

const Legend = styled.legend`
    background-color: #000;
    color: #fff;
    padding: 3px 6px;
`

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0 2em;
`

const Wrapper = styled.div`
min-height: 100vh;
width: 100vw;
max-width: 100vw;
`

export default Input;