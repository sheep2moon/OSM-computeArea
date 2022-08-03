import React, { useState } from "react";
import styled from "styled-components";

const SidebarButton = ({ tooltip, children, ...rest }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <ButtonWrapper>
            <Tooltip show={showTooltip}>
                <p>{tooltip}</p>
            </Tooltip>
            <StyledButton onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)} {...rest}>
                {children}
            </StyledButton>
        </ButtonWrapper>
    );
};

export default SidebarButton;

const ButtonWrapper = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    font-size: 2rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.secondary : "none")};
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const Tooltip = styled.div`
    opacity: ${({ show }) => (show ? "1" : "0")};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    position: absolute;
    left: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 0.5rem;
    height: 4rem;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    > p {
        font-size: 1.2rem;
        white-space: nowrap;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
