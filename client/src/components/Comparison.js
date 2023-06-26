import styled from "styled-components/macro";
import { tableHeader } from "../data/tableHeader";
import { useContext, useEffect, useState } from "react";
import { boats } from "../data/boats";
import { ProductsContext } from "./ProductsContext";

const Comparison = ({ props }) => {
    const [prodInfo, setProdInfo] = useState();
    const { products } = useContext(ProductsContext)
    const [selection, setSelection] = useState();

    const handleChange = (e) => {
        if (products) {
            const select = products.filter((val) => {
                return val.name.toLowerCase().includes(e.target.value);
            })
            if (select.length) {
                setSelection(select)
            }
        }

    }

    useEffect(() => {
        if (props) {
            let mapped = props.map((val) => {
                const found = boats.findIndex((ele) => {
                    return val.name.toLowerCase().includes(ele.model)
                })
                return boats[found]
            })
            setProdInfo(mapped)
        }
    }, [props])

    return (
        <>
            <Table>
                <TableHeader><H1>Your Takacat:</H1></TableHeader>
                <TableHeader>
                    {tableHeader.map((val, index) => {
                        return (
                            <TableCell style={{ color: "black" }} key={index}>{val.name}{val.icon}</TableCell>
                        )
                    })}
                </TableHeader>
                {/* {props && props.map((val) => { */}
                {/* // return ( */}
                <TableRow>
                    <TableCell>{props && props.length && <Img src={props[0].images[0].src} />}</TableCell>
                    <TableCell>Fishing or whatever</TableCell>
                    {prodInfo && Object.keys(prodInfo[0]).map((val, index) => {
                        return (
                            <TableCell>{prodInfo[0][val]}</TableCell>
                        )

                    })}
                </TableRow>
                {selection && selection.map((val, index) => {
                    const find = boats.find((ele) => {
                        return val.name.toLowerCase().includes(ele.model);
                    })
                    return (
                        <TableRow>
                            <TableCell><Img src={val.images[0].src} /></TableCell>
                            <TableCell>Hunting and maybe something else</TableCell>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{find.capacity}</TableCell>
                            <TableCell>{find.HP}</TableCell>
                            <TableCell>{find.weight}</TableCell>
                            <TableCell>{find.widthHeight}</TableCell>
                        </TableRow>
                    )
                })}
                {/* )
                })} */}
            </Table>
            <Container>
                <InputWrapper>
                    <select onChange={handleChange}>
                        <option>Select a model</option>
                        {boats.map((val, index) => {
                            if (props && props.length && !props[0].name.toLowerCase().includes(val.model)) {
                                return (
                                    <option key={index} value={val.model}>Takacat {val.model}S/LX</option>
                                )
                            }
                        })}
                    </select>
                </InputWrapper>
            </Container>
        </>
    );
}

const InputWrapper = styled.div`

`

const Container = styled.div`

`

const H1 = styled.h1`
    width: 100%;
    color: black
`

const TableRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
`

const TableHeader = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    border: 1px solid red;
`

const TableCell = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid red;
`

const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Img = styled.img`
  width: 500px;
  max-width: 100%;
  height: 350px;
  max-height: 250px;
  object-fit: contain;
  border-radius: 5px;
`

export default Comparison;