import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { calcDistance } from "../../utils/calculateDistance.js";
import { calcArea } from "../../utils/calculateArea.js";
import AreaResult from "./AreaResult.jsx";
import DistanceResult from "./DistanceResult.jsx";

const ResultBar = () => {
    const { figures, selected } = useSelector(store => store.figures);

    const distance = useMemo(() => {
        console.log("distance");
        if (selected || selected === 0) {
            return calcDistance(figures[selected].markers);
        }
    }, [figures, selected]);

    const area = useMemo(() => {
        if (selected || selected === 0) {
            return calcArea(figures[selected].markers);
        }
    }, [figures, selected]);

    return (
        <ResultBarContainer>
            {selected !== null && (
                <ResultsWrap>
                    {figures[selected].type === "polygon" && <AreaResult area={area} />}
                    {figures[selected].type === "polyline" && <DistanceResult distance={distance} />}
                </ResultsWrap>
            )}
        </ResultBarContainer>
    );
};

export default ResultBar;

const ResultBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    box-shadow: ${props => props.theme.shadows.lg};
    z-index: 1000;
    color: ${({ theme }) => theme.colors.light};
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
