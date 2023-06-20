import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import styled from "styled-components/macro";
import { CircularProgress } from '@mui/material';
import { boats } from "../data/boats";
import AccessoryCard from "./AccessoryCard";
import FeaturedCard from "./FeaturedCard";

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
    return list[index];
}

const Confirm = () => {
    const [featured, setFeatured] = useState();
    const [featuredAcc, setFeaturedAcc] = useState();
    const location = useLocation();
    const { products } = useContext(ProductsContext)

    useEffect(() => {
        if (location.state.formData && boats) {
            const model = getBiggestIndex(location.state.formData, boats)
            const found = products.filter((val) => {
                return val.name.toLowerCase().includes(model.model)
            })
            setFeatured(found)
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
                            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <H1>Your answers:</H1>
                                <ul style={{ listStyleType: "none" }}>
                                    {Object.keys(location.state.formData).map((val) => {
                                        return (
                                            <li style={{ color: "black", textAlign: "left", width: "100%" }}>{val}: {location.state.formData[val]}</li>
                                        )
                                    })}
                                </ul>
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
        </Wrapper>
    );
}

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

const Img = styled.img`
  width: 500px;
  max-width: 100%;
  height: 350px;
  max-height: 250px;
  object-fit: contain;
  border-radius: 5px;
`
export default Confirm;