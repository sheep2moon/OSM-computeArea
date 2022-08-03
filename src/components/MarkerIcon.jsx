import React from "react";
import styled from "styled-components";
import { TbCircleDot } from "react-icons/tb";

const MarkerIcon = ({ isMarkerVisible }) => {
    return (
        <IconWrap isMarkerVisible={isMarkerVisible}>
            <TbCircleDot />
        </IconWrap>
    );
};

export default MarkerIcon;

const IconWrap = styled.div`
    visibility: ${({ isMarkerVisible }) => (isMarkerVisible ? "visible" : "hidden")};
    > svg {
        font-size: 1.6rem;
        color: #363062;
    }
`;
