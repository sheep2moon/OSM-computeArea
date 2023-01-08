import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SidebarButton from "./SidebarButton.jsx";
import { TbPolygon, TbMapPinOff } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { RiMapPinAddLine } from "react-icons/ri";
import { BsArrowsMove } from "react-icons/bs";
import { GiArrowCursor } from "react-icons/gi";
import { toggleMarkersVisibility } from "../../redux/figuresSlice.js";
import { setActiveTool } from "../../redux/toolsSlice.js";

export const tools = [
    {
        name: "select",
        tooltip: "Wybierz",
        icon: <GiArrowCursor />
    },
    {
        name: "add-polygon",
        tooltip: "Dodaj obszar",
        icon: <TbPolygon />
    },
    {
        name: "add-polyline",
        tooltip: "Dodaj linie",
        icon: <IoAnalyticsOutline />
    },
    {
        name: "add-marker",
        tooltip: "Dodaj punkt",
        icon: <RiMapPinAddLine />
    },
    {
        name: "move-marker",
        tooltip: "Przesuń punkt",
        icon: <BsArrowsMove />
    },
    {
        name: "delete-marker",
        tooltip: "Usuń punkt",
        icon: <TbMapPinOff />
    }
];

const Toolbar = () => {
    const { activeTool } = useSelector(store => store.tools);
    const dispatch = useDispatch();

    const handleChangeTool = toolName => {
        dispatch(setActiveTool(toolName));
    };

    return (
        <SidebarContainer>
            {tools.map(({ name, tooltip, icon }) => (
                <SidebarButton isActive={name === activeTool} key={name} tooltip={tooltip} onClick={() => handleChangeTool(name)}>
                    {icon}
                </SidebarButton>
            ))}
            <SidebarButton tooltip="Przełącz widoczność znaczników" onClick={() => dispatch(toggleMarkersVisibility())}>
                <AiFillEyeInvisible />
            </SidebarButton>
        </SidebarContainer>
    );
};

export default Toolbar;

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
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
