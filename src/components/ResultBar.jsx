import React from "react";
import styled from "styled-components";

const ResultBar = ({ area }) => {
    return (
        <ResultBarContainer>
            Result
            <p>{area}</p>
        </ResultBarContainer>
    );
};

export default ResultBar;

const ResultBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 4rem;
    right: 0;
    height: 4rem;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    border-bottom: ${props => `2px solid ${props.theme.colors.secondary}`};
`;
