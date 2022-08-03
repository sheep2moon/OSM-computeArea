import React from "react";
import styled from "styled-components";

const TopBar = () => {
    return (
        <TopBarContainer>
            <h2>topbar</h2>
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
    justify-content: center;
    box-shadow: ${props => props.theme.shadows.lg};
    z-index: 1000;
    color: ${({ theme }) => theme.colors.light};
`;
