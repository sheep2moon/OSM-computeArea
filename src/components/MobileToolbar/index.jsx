import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeToolbar, setActiveTool } from "../../redux/toolsSlice.js";
import { tools } from "../Toolbar/index.jsx";
import ToolbarButton from "./ToolbarButton.jsx";

const MobileToolbar = () => {
    const { activeTool } = useSelector(store => store.tools);
    const dispatch = useDispatch();

    const handleChangeTool = toolName => {
        dispatch(setActiveTool(toolName));
        dispatch(closeToolbar());
    };
    return (
        <ToolbarContainer>
            <ToolsWrap>
                {tools.map(({ name, tooltip, icon }) => (
                    <ToolbarButton isActive={name === activeTool} key={name} label={tooltip} onClick={() => handleChangeTool(name)}>
                        {icon}
                    </ToolbarButton>
                ))}
            </ToolsWrap>
        </ToolbarContainer>
    );
};

export default MobileToolbar;

const ToolbarContainer = styled.div`
    position: fixed;
    top: 4rem;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ToolsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
