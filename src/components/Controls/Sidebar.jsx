import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SidebarButton from "./SidebarButton.jsx";
import { TbPolygon } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaRegHandPointer, FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { setActiveTool } from "../../redux/toolsSlice.js";

const Sidebar = () => {
    const { activeTool } = useSelector(store => store.tools);
    const dispatch = useDispatch();

    const handleChangeTool = toolName => {
        dispatch(setActiveTool(toolName));
    };

    const tools = [
        {
            name: "select",
            tooltip: "Select",
            icon: <FaRegHandPointer />
        },
        {
            name: "add-marker",
            tooltip: "Add marker",
            icon: <FaMapMarkerAlt />
        },
        {
            name: "move-marker",
            tooltip: "Move marker",
            icon: <BsArrowsMove />
        },
        {
            name: "delete-marker",
            tooltip: "Delete marker",
            icon: <FaMapMarkerAlt />
        },
        {
            name: "add-polygon",
            tooltip: "Add polygon",
            icon: <TbPolygon />
        },
        {
            name: "add-polyline",
            tooltip: "Add polyline",
            icon: <IoAnalyticsOutline />
        }
    ];

    return (
        <SidebarContainer>
            <LogoWrap></LogoWrap>
            {tools.map(({ name, tooltip, icon }) => (
                <SidebarButton isActive={name === activeTool} key={name} tooltip={tooltip} onClick={() => handleChangeTool(name)}>
                    {icon}
                </SidebarButton>
            ))}
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
    z-index: 99999;
`;

const LogoWrap = styled.div`
    display: flex;
    height: 4rem;
    width: 4rem;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: ${props => props.theme.shadows.md};
`;
