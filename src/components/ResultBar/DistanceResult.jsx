import React from "react";
import styled from "styled-components";

const DistanceResult = ({ distance }) => {
    return (
        <ResultWrap>
            <p>{distance.toFixed(2)}m</p>
            <p>{(distance / 1000).toFixed(2)}km</p>
        </ResultWrap>
    );
};

export default DistanceResult;

const ResultWrap = styled.div`
    display: flex;
    gap: 1rem;
`;
