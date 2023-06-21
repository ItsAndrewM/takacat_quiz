import styled from "styled-components/macro";
import { tableHeader } from "../data/tableHeader";
import { useEffect, useState } from "react";
import { boats } from "../data/boats";

const Comparison = ({ props }) => {
    const [prodInfo, setProdInfo] = useState();

    useEffect(() => {
        if (props) {
            let mapped = props.map((val) => {
                const found = boats.findIndex((ele) => {
                    return val.name.toLowerCase().includes(ele.model)
                })
                return boats[found]
            })
            setProdInfo(mapped)
            // mapped = [...new Set(mapped)]
            // console.log(mapped)
        }
    }, [props])
    return (
        <>
            <Table>
                <TableHeader><H1>Your Takacat:</H1></TableHeader>
                <TableHeader>
                    {tableHeader.map((val, index) => {
                        return (
                            <TableCell key={index}>{val.name}</TableCell>
                        )
                    })}
                </TableHeader>
                {props && props.map((val) => {
                    return (
                        <TableRow>
                            <TableCell><Img src={val.images[0].src} /></TableCell>
                            <TableCell>Fishing or whatever</TableCell>
                            {prodInfo && Object.keys(prodInfo[0]).map((val, index) => {
                                return (
                                    <TableCell>{prodInfo[0][val]}</TableCell>
                                )

                            })}
                        </TableRow>
                    )
                })}
            </Table>
            <Container>

            </Container>
        </>
    );
}

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
    border: 1px solid blue;
`

const TableHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    border: 1px solid red;
`

const TableCell = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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