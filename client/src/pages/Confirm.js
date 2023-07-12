import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, Navigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import styled from "styled-components/macro";
import { Button, CircularProgress } from '@mui/material';
import { boats } from "../data/boats";
import AccessoryCard from "../components/AccessoryCard";
import FeaturedCard from "../components/FeaturedCard";
import Comparison from "../components/Comparison";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faWeightHanging, faClipboardQuestion, faGauge, faRulerCombined, faBoxOpen, faCampground, faSuitcaseRolling, faTruckFast } from "@fortawesome/free-solid-svg-icons"
import DinghySvg from "../components/DinghySvg";
import { takaQuiz } from "../data/takaQuiz";
import EngineSvg from "../components/EngineSvg";
import ComparisonList from "../components/ComparisonList";
import AccuracyBar from "../components/AccuracyBar";
import { colorPicker } from "../helpers/colorPicker";
import UseCaseString from "../components/UseCaseString";
import { FormContext } from "../context/FormContext";

export const isEmpty = (obj) => {
    return !obj || Object.values(obj).length === 0;
}

export const randomNum = (num) => {
    return Math.floor(Math.random() * num);
}

export const featuredProducts = (list, emptyList) => {
    while (emptyList.length !== 4) {
        const random = randomNum(list.length)
        const find = emptyList.find((val) => {
            return val === list[random]
        })
        if (!find) {
            emptyList.push(list[random])
            featuredProducts(list, emptyList)
        }
        else {
            featuredProducts(list, emptyList);
        }
        return emptyList;
    }
}

const getBiggestIndex = (object, list) => {
    let index = -1;
    Object.keys(object).forEach((ele) => {
        const model = list.findIndex((o) => {
            if (o[ele]) {
                const str = object[ele].toLowerCase();
                const compare = o[ele].toLowerCase();
                return compare.includes(str)
            }
        })
        if (model > index) {
            index = model;
        }
    })
    if (index !== -1) {
        return list[index];
    }
    else {
        return list[randomNum(list.length)]
    }

}

const accuracyCal = (answerObj, modelObj) => {
    let counter = 0;
    let length = 0
    Object.keys(answerObj).forEach((val) => {
        if (answerObj[val] && modelObj[val]) {
            if (modelObj[val].toLowerCase().includes(answerObj[val].toLowerCase())) {
                counter += 1;
            }
            length += 1;
        }
        else if (!modelObj[val]) {
            counter += 1;
            length += 1;
        }
    })
    return (Math.floor((counter / length) * 100))
}

const arr = [];

const Confirm = () => {
    const [featured, setFeatured] = useState();
    const [featuredAcc, setFeaturedAcc] = useState();
    const location = useLocation();
    const { products } = useContext(ProductsContext)
    const [modelInfo, setModelInfo] = useState();
    const [customerVals, setCustomerVals] = useState();
    const [percentage, setPercentage] = useState(0);
    const [color, setColor] = useState();
    const navigate = useNavigate();

    const { state } = useContext(FormContext);

    useEffect(() => {
        setFeatured()
        console.log("reset");
        setModelInfo();
    }, [])


    useEffect(() => {
        setFeatured();
        setModelInfo();
        if (state && boats && products && takaQuiz) {
            const model = getBiggestIndex(state, boats)
            const found = products.filter((val) => {
                return val.name.toLowerCase().includes(model.model)
            })
            setFeatured(found)
            setModelInfo(model)
            Object.keys(state).forEach((val) => {
                const find = takaQuiz.find((ele) => {
                    return val === ele.key
                })
                if (find) {
                    const l = find.questions.find((o) => {
                        return state[val] === o.name;
                    })
                    if (l) {
                        arr.push(l);
                    }
                }
            })
            setCustomerVals(arr)
        }
    }, [state])

    useEffect(() => {
        if (products) {
            const arr = [];
            const acc = []
            products.forEach((a) => {
                const find = a.categories.find((b) => {
                    return b.name.toLowerCase().includes('accessories');
                })
                if (find) {
                    arr.push(a)
                }
            })
            const c = featuredProducts(arr, acc);
            setFeaturedAcc(c)
        }
    }, [products])

    useEffect(() => {
        if (modelInfo && state) {
            setPercentage(accuracyCal(state, modelInfo))
            setColor(colorPicker(accuracyCal(state, modelInfo)))
        }
    }, [state, modelInfo])

    if (isEmpty(state)) {
        return (
            <Navigate to={"/"} />
        )
    }
    else {
        return (
            <Wrapper>
                <Container>
                    <Button style={{ border: "1px solid red" }} onClick={(e) => { e.preventDefault(); setFeatured([]); navigate('/') }}>Start Over</Button>
                </Container>
                <Container style={{ borderBottom: "1px solid black", paddingBottom: "1em" }}>
                    <H1>My Results</H1>
                </Container>
                <Container>
                    {featured && products && modelInfo && state ?
                        <>
                            <AnswersWrapper>
                                <ListWrappers>
                                    <ModelContainer>
                                        <DinghySvg />Takacat {modelInfo && modelInfo.model}
                                    </ModelContainer>
                                    <ModelContainer>
                                        <p style={{ color: "black" }}>Your Answers <FontAwesomeIcon icon={faClipboardQuestion} /></p>
                                    </ModelContainer>
                                    <ModelContainer>
                                        {modelInfo && percentage && color &&
                                            <AccuracyBar percentage={percentage} color={color} modelInfo={modelInfo} />
                                        }
                                    </ModelContainer>
                                    <ListContainer>
                                        <Ul style={{ alignItems: "flex-start", width: "60%" }}>
                                            {/* <Li style={{ justifyContent: "flex-end", padding: ".25em .5em", fontWeight: "bold", borderBottom: "1px solid black" }}>Your Answers<FontAwesomeIcon icon={faClipboardQuestion} /></Li> */}
                                            <Li style={{ justifyContent: "flex-end", padding: ".25em .5em" }}>{state.capacity}<FontAwesomeIcon icon={faUsers} /></Li>
                                            <Li style={{ justifyContent: "flex-end", padding: ".25em .5em" }}>{state.ifOutboard}<EngineSvg /></Li>
                                            <Li style={{ justifyContent: "flex-end", padding: ".25em .5em" }}>{state.HP}<FontAwesomeIcon icon={faGauge} /></Li>
                                            <Li style={{ justifyContent: "flex-end", padding: ".25em .5em" }}>{state.weight}<FontAwesomeIcon icon={faTruckFast} /></Li>
                                            <Li style={{ justifyContent: "flex-end", padding: ".25em .5em" }}>{state.widthHeight}<FontAwesomeIcon icon={faSuitcaseRolling} /></Li>
                                            <Li style={{ justifyContent: "flex-end", padding: ".25em .5em" }}>{state.storage}<FontAwesomeIcon icon={faBoxOpen} /></Li>
                                        </Ul>
                                        <Ul style={{ alignItems: "flex-end" }}>
                                            {/* <Li style={{ fontWeight: "bold", borderBottom: "1px solid black" }}>We recomend the <span style={{ textDecoration: "underline" }}>Takacat {modelInfo.model}</span> with <span style={{ color: "red" }}>{percentage}%</span> accuracy</Li> */}
                                            {customerVals && modelInfo && customerVals.map((val) => {
                                                return (
                                                    <ComparisonList modelInfo={modelInfo} val={val} />
                                                )
                                            })}
                                        </Ul>
                                        <Ul style={{ width: "40%" }}>
                                            {featured.map((val) => {
                                                return (
                                                    <Li>
                                                        <FeaturedCard val={val} />
                                                    </Li>
                                                )
                                            })}
                                        </Ul>
                                    </ListContainer>
                                </ListWrappers>
                            </AnswersWrapper>
                        </>
                        :
                        <CircularProgress />
                    }
                </Container>
                <Container>
                    <h2>These would also work with your Takacat {modelInfo && modelInfo.model}</h2>
                    <p style={{ color: "black" }}>These are the best accessories for {state && state.useCase && state.useCase.length && (
                        <UseCaseString array={state.useCase} />
                    )}
                    </p>
                </Container>
                <Container>
                    {featuredAcc ? featuredAcc.map((val) => {
                        return (
                            <AccessoryCard val={val} />
                        )
                    })
                        :
                        <CircularProgress />
                    }
                </Container>
                <Container>
                    <Comparison props={featured} />
                </Container>
            </Wrapper>
        );
    }


}
const Ul = styled.ul`
    width: 100%;
    display: flex;
    list-style-type: none;
    flex-direction: column;
`
const ListWrappers = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

const AnswersWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 1em;
`

const CardContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

`

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`

const ModelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    padding: .5em 0;
    margin: 0 5em 0 5em;
`

const Li = styled.li`
width: 100%;
    color: black;
    display: flex;
    justify-content: flex-start;
    padding-bottom: 0.5em;
    gap: .5em
`

const H1 = styled.h1`
    width: 100%;
    color: black;
    text-align: center;
`

const Container = styled.div`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Wrapper = styled.div`
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 1em 0 5em 0;
`
export default Confirm;