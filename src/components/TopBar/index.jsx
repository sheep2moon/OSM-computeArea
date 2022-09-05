import React from "react";
import styled from "styled-components";
import { MdFormatShapes } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { closeFiguresSidebar, openFiguresSidebar, openToolbar, closeToolbar } from "../../redux/toolsSlice.js";

const TopBar = () => {
    const { isMobileToolbarOpen, isFiguresSidebarOpen } = useSelector(store => store.tools);
    const dispatch = useDispatch();

    const toggleToolbar = () => {
        if (isMobileToolbarOpen) dispatch(closeToolbar());
        if (!isMobileToolbarOpen) {
            dispatch(closeFiguresSidebar());
            dispatch(openToolbar());
        }
    };
    const toggleFiguresSidebar = () => {
        if (isFiguresSidebarOpen) dispatch(closeFiguresSidebar());
        if (!isFiguresSidebarOpen) {
            dispatch(closeToolbar());
            dispatch(openFiguresSidebar());
        }
    };

    return (
        <TopBarContainer>
            <button onClick={toggleToolbar}>
                <VscTools />
                Narzędzia
            </button>

            <button onClick={toggleFiguresSidebar}>
                Elementy
                <MdFormatShapes />
            </button>
        </TopBarContainer>
    );
};

export default TopBar;

const TopBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    box-shadow: ${props => props.theme.shadows.lg};
    z-index: 1000;
    color: ${({ theme }) => theme.colors.light};
    > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.light};
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        > svg {
            font-size: 1.8rem;
            color: ${({ theme }) => theme.colors.accent};
        }
        :first-child {
            @media screen and (min-width: 768px) {
                display: none;
            }
        }
    }
    @media screen and (min-width: 768px) {
        justify-content: flex-end;
    }
`;
