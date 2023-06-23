import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import styled from "styled-components/macro";
import { CircularProgress } from '@mui/material';
import { boats } from "../data/boats";
import AccessoryCard from "./AccessoryCard";
import FeaturedCard from "./FeaturedCard";
import Comparison from "./Comparison";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faWeightHanging, faGauge, faRulerCombined, faBoxOpen, faCampground, faSuitcaseRolling, faTruckFast } from "@fortawesome/free-solid-svg-icons"
import DinghySvg from "./DinghySvg";
import { takaQuiz } from "../data/takaQuiz";
import EngineSvg from "./EngineSvg";

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
            return o[ele] === object[ele]
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

const arr = [];

const Confirm = () => {
    const [featured, setFeatured] = useState();
    const [featuredAcc, setFeaturedAcc] = useState();
    const location = useLocation();
    const { products } = useContext(ProductsContext)
    const [modelInfo, setModelInfo] = useState();
    const [customerVals, setCustomerVals] = useState();


    useEffect(() => {
        if (location.state.formData && boats && products && takaQuiz) {
            const model = getBiggestIndex(location.state.formData, boats)
            const found = products.filter((val) => {
                return val.name.toLowerCase().includes(model.model)
            })
            setFeatured(found)
            setModelInfo(model)
            Object.keys(location.state.formData).forEach((val) => {
                const find = takaQuiz.find((ele) => {
                    return val === ele.key
                })
                if (find) {
                    const l = find.questions.find((o) => {
                        return location.state.formData[val] === o.name;
                    })
                    if (l) {
                        arr.push(l);
                    }
                    console.log(l)
                }

            })
            setCustomerVals(arr)
        }
    }, [location.state.formData])

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


    return (
        <Wrapper>
            <Container>
                <H1>Based on your answers, we reccomend...</H1>
            </Container>
            <Container>
                {featured ?
                    <>
                        {featured.map((val) => {
                            return (
                                <FeaturedCard val={val} />
                            )
                        })}
                        <div style={{ width: "100%", border: "1px solid red" }}>
                            <div style={{ width: "100%", display: "flex", justifyContent: "Center", flexWrap: "wrap", gap: "20px" }}>
                                <H1>Your answers:</H1>
                                <ModelContainer style={{ width: "100%", borderBottom: "1px solid black", display: "flex", justifyContent: "center", padding: ".5em 0", margin: "0 5em 0 5em" }}><DinghySvg />Takacat {modelInfo && modelInfo.model}</ModelContainer>
                                <ListContainer>
                                    <ul style={{ listStyleType: "none", flexDirection: "column", alignItems: "flex-start" }}>
                                        <Li style={{ justifyContent: "flex-end", paddingRight: ".5em" }}>{location.state.formData.capacity}<FontAwesomeIcon icon={faUsers} /></Li>
                                        <Li style={{ justifyContent: "flex-end", paddingRight: ".5em" }}>{location.state.formData.ifOutboard}<EngineSvg /></Li>
                                        <Li style={{ justifyContent: "flex-end", paddingRight: ".5em" }}>{location.state.formData.HP}<FontAwesomeIcon icon={faGauge} /></Li>
                                        <Li style={{ justifyContent: "flex-end", paddingRight: ".5em" }}>{location.state.formData.weight}<FontAwesomeIcon icon={faTruckFast} /></Li>
                                        <Li style={{ justifyContent: "flex-end", paddingRight: ".5em" }}>{location.state.formData.widthHeight}<FontAwesomeIcon icon={faSuitcaseRolling} /></Li>
                                        <Li style={{ justifyContent: "flex-end", paddingRight: ".5em" }}>{location.state.formData.storage}<FontAwesomeIcon icon={faBoxOpen} /></Li>

                                        {/* {Object.keys(location.state.formData).map((val, index) => {
                                        return (
                                            <li key={index} style={{ color: "black", textAlign: "left", width: "100%" }}>{val}: {location.state.formData[val]}</li>
                                        )
                                    })} */}
                                    </ul>
                                    <ul>
                                        {customerVals && modelInfo && customerVals.map((val) => {
                                            // console.log(modelInfo[val.title])
                                            modelInfo[val.title]

                                            return (
                                                <div></div>
                                                // <Li>{val.value === true || val.value === false ? (<Span>{val.value.toString()}</Span>) : (<Span>{val.value}</Span>)}</Li>
                                                // <Li>{modelInfo[val.title].toLowerCase().includes(val.name) ? <Span style={{ backgroundColor: "limegreen" }}>{val.value}</Span> : <Span>{val.value}</Span>}</Li>
                                            )
                                        })}
                                        {/* <Li>{modelInfo.capacity}</Li>
                                        <Li>{modelInfo.ifOutboard}</Li>
                                        <Li>{modelInfo.HP}</Li>
                                        <Li>{modelInfo.weight}</Li>
                                        <Li>{modelInfo.widthHeight}</Li>
                                        <Li>{modelInfo.storage}</Li> */}
                                    </ul>
                                    {/* <ul style={{ listStyleType: "none" }}>
                                    {featured.map((val, index) => {
                                        return (
                                            <li key={index} style={{ color: "black", textAlign: "left", width: "100%" }}>{val.name}: </li>
                                        )
                                    })}
                                </ul> */}
                                </ListContainer>
                            </div>
                        </div>
                    </>
                    :
                    <CircularProgress />
                }
            </Container>
            <Container>
                <H1>These would also work with your Takacat { }</H1>
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

const Span = styled.span`
    text-transform: capitalize;
`

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: .5em;
`

const ModelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    padding: .5em 0;
    margin: 5em 0;
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

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavItem = styled(NavLink)`
    width: 100%;
    height: 100%;
`


export default Confirm;