import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FigureControls from "./FigureControls.jsx";

const FiguresSidebar = () => {
    const { figures } = useSelector(store => store.figures);

    useEffect(() => {
        console.log(figures);
    }, [figures]);

    return (
        <SidebarContainer>
            <h2>Figures</h2>
            {figures.length === 0 && <p>no figures</p>}
            {figures.map((figure, index) => (
                <FigureControls key={figure.name} figure={figure} figureIndex={index} />
            ))}
        </SidebarContainer>
    );
};

export default FiguresSidebar;

const SidebarContainer = styled.div`
    position: fixed;
    top: 4rem;
    right: 0;
    bottom: 0;
    width: 24rem;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
    color: ${({ theme }) => theme.colors.light};
    z-index: 999;
    > h2 {
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
        border-left: ${({ theme }) => `4px solid ${theme.colors.primary}`};
        border-right: ${({ theme }) => `4px solid ${theme.colors.primary}`};
    }
    > p {
        text-align: center;
        font-size: 1.2rem;
        padding: 1rem 0;
    }
`;
