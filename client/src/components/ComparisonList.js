import { useEffect, useState } from "react";
import styled from "styled-components/macro";

const ComparisonList = ({ modelInfo, val }) => {
    const [withoutColon, setWithoutColon] = useState();

    useEffect(() => {
        if (modelInfo[val.title]) {
            setWithoutColon(modelInfo[val.title])
        }
    }, [val, modelInfo])
    return (
        <Li>
            {modelInfo[val.title] ?
                (<Span>
                    {modelInfo[val.title].toLowerCase().includes((val.name).toLowerCase()) ?
                        (
                            <GreenSpan>
                                {withoutColon && withoutColon}
                            </GreenSpan>
                        )
                        :
                        (
                            <Span>
                                {withoutColon && withoutColon}
                            </Span>
                        )}
                </Span>)
                : (<GreenSpan>{val.name}</GreenSpan>)}
        </Li>
    );
}

const GreenSpan = styled.span`
    /* text-transform: capitalize; */
    background-color: limegreen;
    border-radius: .5em;
    padding: .25em .5em;
    color: white;

`

const Span = styled.span`
    /* text-transform: capitalize; */
    padding: .25em .5em
`

const Li = styled.li`
    width: 100%;
    color: black;
    display: flex;
    justify-content: flex-start;
    gap: .5em;
`

export default ComparisonList;