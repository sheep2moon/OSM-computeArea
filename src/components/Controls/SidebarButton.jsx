import React from "react";
import styled from "styled-components";

const SidebarButton = ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default SidebarButton;

const StyledButton = styled.button`
    width: 100%;
    height: 4rem;
    font-size: 2rem;
`;
