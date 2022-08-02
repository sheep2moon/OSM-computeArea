import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { resetAll } from "../../redux/polygonsSlice.js";
import SidebarButton from "./SidebarButton.jsx";
import { TbPolygon, TbPolygonOff } from "react-icons/tb";
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

    const handleDeleteAll = () => {
        dispatch(resetAll());
    };

    return (
        <SidebarContainer>
            <LogoWrap></LogoWrap>
            <SidebarButton tooltip="Select" isActive={activeTool === "select"} onClick={() => handleChangeTool("select")}>
                <FaRegHandPointer />
            </SidebarButton>

            <SidebarButton tooltip="Move Marker" isActive={activeTool === "move-marker"} onClick={() => handleChangeTool("move-marker")}>
                <FaMapMarkerAlt />
                <span>
                    <BsArrowsMove />
                </span>
            </SidebarButton>

            <SidebarButton tooltip="Delete Marker" isActive={activeTool === "delete-marker"} onClick={() => handleChangeTool("delete-marker")}>
                <FaMapMarkerAlt />
                <span>-</span>
            </SidebarButton>

            <SidebarButton tooltip="Add marker to polygon" isActive={activeTool === "add-marker-to-polygon"} onClick={() => handleChangeTool("add-marker-to-polygon")}>
                <FaMapMarkerAlt />
                <span>+</span>
            </SidebarButton>

            <SidebarButton tooltip="Add Polygon" isActive={activeTool === "add-polygon"} onClick={() => handleChangeTool("add-polygon")}>
                <TbPolygon />
                <span>+</span>
            </SidebarButton>

            <SidebarButton tooltip="Add polyline" isActive={activeTool === "add-polyline"} onClick={() => handleChangeTool("add-polyline")}>
                <IoAnalyticsOutline />
                <span>+</span>
            </SidebarButton>

            <SidebarButton tooltip="Delete all" onClick={handleDeleteAll}>
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
    z-index: 99999;
`;

const LogoWrap = styled.div`
    display: flex;
    height: 4rem;
    width: 4rem;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: ${props => props.theme.shadows.md};
`;
