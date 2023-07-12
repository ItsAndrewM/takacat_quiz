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
                (

                    modelInfo[val.title].toLowerCase().includes((val.name).toLowerCase()) ?
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
                        )

                )
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
    width: 100%;
`

const Span = styled.span`
    /* text-transform: capitalize; */
    padding: .25em .5em;
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const Li = styled.li`
    width: 100%;
    color: black;
    display: flex;
    justify-content: flex-start;
    gap: .5em;
`

export default ComparisonList;