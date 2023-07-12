import styled from "styled-components/macro";
import { tableHeader } from "../data/tableHeader";
import { useContext, useEffect, useState } from "react";
import { boats } from "../data/boats";
import { ProductsContext } from "../context/ProductsContext";
import { CircularProgress } from "@mui/material";

const Comparison = ({ props }) => {
    const [prodInfo, setProdInfo] = useState();
    const [selected, setSelected] = useState();
    const { products } = useContext(ProductsContext)
    const [selection, setSelection] = useState();

    const handleChange = (e) => {
        if (products) {
            const select = products.filter((val) => {
                return val.name.toLowerCase().includes(e.target.value);
            })
            if (select.length) {
                setSelection(select)
                setSelected(e.target.value);
                console.log(select)
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

    console.log(prodInfo)

    return (
        props && selection && products ? (
            <>
                <Table>
                    <TableHeader style={{ padding: "1em 0" }}><H1>Your Takacat:</H1></TableHeader>
                    <TableHeader>
                        {tableHeader.map((val, index) => {
                            return (
                                <TableCell style={{ color: "black" }} key={index}>{val.name}{val.icon}</TableCell>
                            )
                        })}
                    </TableHeader>
                    {/* {props && props.map((val) => { */}
                    {/* // return ( */}
                    {props && props.map((val, index) => {
                        return (
                            <TableRow>
                                <TableCell><Img src={val.images[0].src} /></TableCell>
                                <TableCell>{val.name}</TableCell>
                                {prodInfo && Object.keys(prodInfo[0]).map((val, index) => {
                                    if (index > 0) {
                                        return (
                                            <TableCell key={index}>{prodInfo[0][val]}</TableCell>
                                        )
                                    }
                                })}
                            </TableRow>
                        )
                    })}
                </Table>
                {prodInfo &&
                    <Container>
                        <InputWrapper>
                            <label>Compare the Takacat {prodInfo[0].model} with another Dinghy </label>
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
                }
                {selected &&
                    <Table>
                        <TableHeader style={{ padding: "1em 0" }}><H1>Takacat {selected && selected}S/LX</H1></TableHeader>
                        <TableHeader>
                            {tableHeader.map((val, index) => {
                                return (
                                    <TableCell style={{ color: "black" }} key={index}>{val.name}{val.icon}</TableCell>
                                )
                            })}
                        </TableHeader>
                        {selection && selection.map((val, index) => {
                            const find = boats.find((ele) => {
                                return val.name.toLowerCase().includes(ele.model);
                            })
                            return (
                                <TableRow key={index}>
                                    <TableCell><Img src={val.images[0].src} /></TableCell>
                                    {/* <TableCell>Hunting and maybe something else</TableCell> */}
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
                }

            </>
        )
            :
            (
                <CircularProgress />
            )
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
    border: 1px solid #202e38;
`

const TableCell = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid #202e38;
    text-align: center;
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