import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import styled from "styled-components/macro";
import { CircularProgress } from '@mui/material';
import { boats } from "../data/boats";

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

const Confirm = () => {
    const [featured, setFeatured] = useState();
    const [featuredAcc, setFeaturedAcc] = useState();
    const location = useLocation();
    const { products } = useContext(ProductsContext)

    useEffect(() => {
        Object.keys(location.state.formData).forEach((val) => {
            const model = boats.find((ele) => {
                return ele[val] === location.state.formData[val]
            })
            if (model && products) {
                const found = products.filter((a) => {
                    return a.name.toLowerCase().includes(model.model)
                })
                setFeatured(found)
            }
        })
    }, [location.state, products])

    useEffect(() => {
        const arr = [];

        if (products) {
            const arr = [];
            const acc = []
            products.forEach((a) => {
                const find = a.categories.find((b) => {
                    console.log(b)
                    return b.name.toLowerCase().includes('accessories');
                })
                if (find) {
                    arr.push(a)
                }
            })
            const c = featuredProducts(arr, acc);
            console.log(c)
            setFeaturedAcc(c)
        }


    }, [products])


    return (
        <Wrapper>
            <Container>
                <H1>Based on your asnwers, we reccomend...</H1>
            </Container>
            <Container>
                {featured ? featured.map((val) => {
                    return (
                        <CardWrapper>

                            <H>{val.name}</H>
                            <ImageWrapper>
                                <Img src={val.images[0].src} />
                            </ImageWrapper>

                        </CardWrapper>
                    )
                })

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
                        <CardWrapper>

                            <H>{val.name}</H>
                            <ImageWrapper>
                                <Img src={val.images[0].src} />
                            </ImageWrapper>

                        </CardWrapper>
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