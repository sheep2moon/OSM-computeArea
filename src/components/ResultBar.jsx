import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ResultBar = () => {
    const { currentPolygon, polygons } = useSelector(store => store.map);

    if (currentPolygon < 0) {
        return <></>;
    }

    return (
        <ResultBarContainer>
            <ResultsWrap>
                <p>Selected polygon area: </p>
                <p>{polygons[currentPolygon].area.toFixed(2) + " \u33A1"}</p>
                <p>{(polygons[currentPolygon].area / 100).toFixed(2) + " a"}</p>
                <p>{(polygons[currentPolygon].area / 10000).toFixed(2) + " ha"}</p>
                <p>{(polygons[currentPolygon].area / 1000000).toFixed(2) + " km"}</p>
            </ResultsWrap>
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

const ResultsWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 1.6rem;
`;
