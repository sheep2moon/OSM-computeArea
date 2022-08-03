import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SidebarButton from "./SidebarButton.jsx";
import { setActiveTool } from "../../redux/toolsSlice.js";
import { TbPolygon, TbMapPinOff } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { RiMapPinAddLine } from "react-icons/ri";
import { BsArrowsMove } from "react-icons/bs";
import { GiArrowCursor } from "react-icons/gi";
import { toggleMarkersVisibility } from "../../redux/figuresSlice.js";

const ToolsSidebar = () => {
    const { activeTool } = useSelector(store => store.tools);
    const dispatch = useDispatch();

    const handleChangeTool = toolName => {
        dispatch(setActiveTool(toolName));
    };

    const tools = [
        {
            name: "select",
            tooltip: "Select",
            icon: <GiArrowCursor />
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
        },
        {
            name: "add-marker",
            tooltip: "Add marker",
            icon: <RiMapPinAddLine />
        },
        {
            name: "move-marker",
            tooltip: "Move marker",
            icon: <BsArrowsMove />
        },
        {
            name: "delete-marker",
            tooltip: "Delete marker",
            icon: <TbMapPinOff />
        }
    ];

    return (
        <SidebarContainer>
            {tools.map(({ name, tooltip, icon }) => (
                <SidebarButton isActive={name === activeTool} key={name} tooltip={tooltip} onClick={() => handleChangeTool(name)}>
                    {icon}
                </SidebarButton>
            ))}
            <SidebarButton tooltip="On/Off markers visibility" onClick={() => dispatch(toggleMarkersVisibility())}>
                <AiFillEyeInvisible />
            </SidebarButton>
        </SidebarContainer>
    );
};

export default ToolsSidebar;

const SidebarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4rem;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    z-index: 999;
    box-shadow: ${props => props.theme.shadows.md};
`;
