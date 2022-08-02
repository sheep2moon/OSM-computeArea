import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPolygon, resetAll } from "../../redux/mapSlice.js";
import SidebarButton from "./SidebarButton.jsx";
import { TbPolygon, TbPolygonOff } from "react-icons/tb";

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleAddPolygon = () => {
        dispatch(addPolygon());
    };

    const handleDeleteAll = () => {
        dispatch(resetAll());
    };

    return (
        <SidebarContainer>
            <LogoWrap></LogoWrap>
            <SidebarButton onClick={handleAddPolygon}>
                <TbPolygon />
            </SidebarButton>

            <SidebarButton onClick={handleDeleteAll}>
                <TbPolygonOff />
            </SidebarButton>
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4rem;
    background-color: ${props => props.theme.colors.primary};
    border-right: ${props => `2px solid ${props.theme.colors.secondary}`};
    display: flex;
    flex-direction: column;
`;

const LogoWrap = styled.div`
    display: flex;
    height: 4rem;
    width: 4rem;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: ${props => props.theme.shadows.md};
`;
