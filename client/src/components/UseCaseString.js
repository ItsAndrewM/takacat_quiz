import styled from "styled-components/macro";

const UseCaseString = ({ array }) => {
    return (
        <Span>
            {array.map((val, index) => {
                if (index + 1 !== array.length) {
                    if (!val.includes("ing")) {
                        return (
                            <span key={index}>{val}ing, </span>
                        )
                    }
                    else {
                        return (
                            <span key={index}>{val}, </span>
                        )
                    }
                }
                else {
                    if (!val.includes("ing")) {
                        return (
                            <span key={index}>{val}ing</span>
                        )
                    }
                    else {
                        return (
                            <span key={index}>{val}</span>
                        )
                    }
                }
            })}
        </Span>
    );
}

const Span = styled.span`
    text-decoration: underline;
    font-weight: bold;
    text-transform: capitalize;
`
export default UseCaseString;