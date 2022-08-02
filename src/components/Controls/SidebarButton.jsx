import React, { useState } from "react";
import styled from "styled-components";

const SidebarButton = ({ tooltip, children, ...rest }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <ButtonWrapper>
            <Tooltip show={showTooltip}>{tooltip}</Tooltip>
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
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.light : "#fefefe")};
    cursor: pointer;

    > span {
        position: absolute;
        left: 50%;
        top: 50%;
    }
`;

const Tooltip = styled.p`
    opacity: ${({ show }) => (show ? "1" : "0")};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    position: absolute;
    left: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
`;
