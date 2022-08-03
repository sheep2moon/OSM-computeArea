import React from "react";
import styled from "styled-components";
import { TbCircleDot } from "react-icons/tb";

const MarkerIcon = () => {
    return (
        <IconWrap>
            <TbCircleDot />
        </IconWrap>
    );
};

export default MarkerIcon;

const IconWrap = styled.div`
    > svg {
        font-size: 1.6rem;
        color: #363062;
    }
`;
