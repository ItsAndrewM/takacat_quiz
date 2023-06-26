import styled from "styled-components/macro";

const AccuracyBar = ({ percentage, color, modelInfo }) => {

    return (
        <Wrapper>
            {percentage && color &&
                <Bar style={{ width: `${percentage}%`, backgroundColor: `${color}`, borderRight: "1px solid black" }}>
                    {color === "limegreen" ? (
                        <span style={{ color: "white" }}>
                            We recomend the <span style={{ fontWeight: "bold", textDecoration: "underline" }}> Takacat {modelInfo.model}</span> with <span style={{ fontWeight: "bold", textDecoration: "underline" }}>{percentage}%</span> accuracy
                        </span>
                    )
                        :
                        (
                            <span >
                                We recomend the <span style={{ fontWeight: "bold", textDecoration: "underline" }}> Takacat {modelInfo.model}</span> with <span style={{ fontWeight: "bold", textDecoration: "underline" }}>{percentage}%</span> accuracy
                            </span>
                        )}
                </Bar>
            }
        </Wrapper>
    );
}

const Bar = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export default AccuracyBar;