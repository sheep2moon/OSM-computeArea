import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FigureControls from "./FigureControls.jsx";

const FiguresSidebar = () => {
    const { figures } = useSelector(store => store.figures);

    return (
        <SidebarContainer>
            <h2>Figures</h2>
            {figures.map(figure => (
                <FigureControls key={figure.name} figure={figure} />
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
`;
