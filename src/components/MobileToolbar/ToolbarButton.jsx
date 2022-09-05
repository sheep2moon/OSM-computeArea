import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ToolbarButton = ({ label, children, ...rest }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseOver = () => setShowTooltip(true);
    const handleMouseOut = () => setShowTooltip(false);
    return (
        <ButtonWrapper>
            <StyledButton onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} {...rest}>
                {children}
                <span>{label}</span>
            </StyledButton>
        </ButtonWrapper>
    );
};

export default ToolbarButton;

const ButtonWrapper = styled.div`
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
    color: ${({ theme }) => theme.colors.light};
    > svg {
        color: ${({ theme }) => theme.colors.accent};
    }
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.secondary : "none")};
    display: flex;
    gap: 1rem;
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
