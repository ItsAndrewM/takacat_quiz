import styled from "styled-components/macro";
import { takaQuiz } from "../data/takaQuiz";
import FormQuestion from "../components/FormQuestion";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundBoat from "../assets/pexels-matheus-guimarães-611328.jpg";
import next from "../assets/sound/next.mp3"
import { FormContext } from "../context/FormContext";

const playSound = (soundFile) => {
    new Audio(soundFile).play();
}
let arr = [];
const Input = () => {
    const [formData, setFormData] = useState({});
    const [qIndex, setQIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [anArr, setAnArr] = useState([]);
    const { action } = useContext(FormContext);

    const navigate = useNavigate();

    useEffect(() => {
        setIsActive(false)
    }, [qIndex])


    const handleChange = (e) => {
        const find = takaQuiz.find((val) => {
            return val.key === e.target.name
        })
        if (find.type === "checkbox") {
            const exists = arr.find((val) => {
                return val.toLowerCase().includes((e.target.value).toLowerCase());
            })
            if (!exists) {
                arr.push(e.target.value)
            }
            else {
                const filteredOut = arr.filter((val) => {
                    return !val.toLowerCase().includes((e.target.value).toLowerCase());
                })
                arr = filteredOut

            }
            setFormData({ ...formData, [e.target.name]: arr });
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    const handleNext = (e) => {
        e.preventDefault();
        setQIndex(qIndex + 1);
        // playSound(next)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        action.receiveNewFormData(formData)
        navigate("/confirmation", { state: { formData: formData } })
    }

    const handleBack = (e) => {
        e.preventDefault();
        if (qIndex !== 0) {
            setQIndex(qIndex - 1);
        }
    }

    useEffect(() => {
        if (Object.keys(formData)[qIndex - 1]) {
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }, [formData])

    return (
        <Wrapper>
            <Container style={{ backgroundImage: `url(${backgroundBoat})`, minHeight: "100vh" }}>
                <Form onChange={handleChange} onSubmit={handleSubmit} target="_blank">
                    {qIndex === 0 &&
                        <Fieldset >
                            <Legend><h1 style={{ padding: "0 0 .25em 0" }}>Takacat Boat Model Finder</h1></Legend>
                            <p>Takacat boats embody the spirit of adventure and deliver an unparalleled on-water experience. With their exceptional versatility, stability, comfort, durability, and user-friendly design, Takacat day boats are the perfect choice for water enthusiasts seeking excitement and unforgettable moments. Find what’s right for you.</p>
                            <ButtonWrapper>
                                <Button onClick={(e) => { e.preventDefault(); setQIndex(1) }}>Start</Button>
                            </ButtonWrapper>
                        </Fieldset>
                    }
                    {takaQuiz.map((q, index) => {
                        return (
                            <FormQuestion q={q} key={index} qIndex={qIndex} setQIndex={setQIndex} />
                        )
                    })}
                    {qIndex === takaQuiz.length ?
                        <Container style={{ flexDirection: "column" }}>
                            <Button onClick={handleBack}>Previous</Button>
                            <SubmitInput type="submit" value="Submit" />
                        </Container>
                        :
                        <Container>
                            {qIndex >= 1 &&
                                <>
                                    <Button onClick={handleBack}>Previous</Button>
                                    <Button onClick={handleNext} disabled={!isActive}>Next</Button>
                                </>
                            }
                        </Container>
                    }
                </Form>
            </Container>
        </Wrapper>
    );
}

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const SubmitInput = styled.input`
    width: 400px;
    max-width: 400px;
    height: 100px;
    max-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(9px);
    background-color: inherit;
    text-transform: capitalize;
    color: white;
    border: 1px solid var(--accent-secondary-color);
    &:hover {
        background: rgba(255, 255, 255, 0.8);
        border: 2px solid #FFFFFF;
        backdrop-filter: blur(16px);
        background-color: inherit;
        cursor: pointer;
    }

`

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: #c0c0c0;
    border-radius: 6px;
    padding: 5px 10px;
    text-align: center;
    color: #ffffff;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
        border: 1px solid var(--accent-secondary-color);
    }
    &:disabled {
        cursor: not-allowed;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    background-position: center;
    background-size: cover;
    padding: 2em 0;

`

const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`

const Legend = styled.legend`
    color: #fff;
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
display: flex;
justify-content: center;
align-items: center;
`

export default Input;