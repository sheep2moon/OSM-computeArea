import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { RiDeleteBack2Line, RiH1 } from "react-icons/ri";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BiArea } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { calcDistance } from "../../utils/calculateDistance.js";
import { calcArea } from "../../utils/calculateArea.js";
import InputSelect from "../InputSelect.jsx";
import { deleteFigure, selectFigure } from "../../redux/figuresSlice.js";

const areaUnits = ["m2", "a", "ha", "km2"];
const distanceUnits = ["m", "km"];

const FigureControls = ({ figure }) => {
    const [areaUnit, setAreaUnit] = useState(areaUnits[0]);
    const [distanceUnit, setDistanceUnit] = useState(distanceUnits[0]);
    const { selected } = useSelector(store => store.figures);
    const dispatch = useDispatch();

    const distance = useMemo(() => {
        const metersDistance = calcDistance(figure.markers);
        if (distanceUnit === "km") {
            return (metersDistance / 1000).toFixed(2);
        }
        if (distanceUnit === "m") {
            return metersDistance.toFixed(2);
        }
    }, [figure, distanceUnit]);

    const area = useMemo(() => {
        if (figure.type === "polyline") {
            return;
        }
        const metersArea = calcArea(figure.markers);
        if (areaUnit === "ha") {
            return (metersArea / 10000).toFixed(2);
        }
        if (areaUnit === "a") {
            return (metersArea / 100).toFixed(2);
        }
        if (areaUnit === "km2") {
            return (metersArea / 1000000).toFixed(2);
        }
        return metersArea.toFixed(2);
    }, [figure, areaUnit]);

    const handleDeleteFigure = () => {
        dispatch(deleteFigure({ figureId: figure.id }));
    };
    const handleSelectFigure = () => {
        dispatch(selectFigure(figure.id));
    };

    return (
        <ControlsWrap isSelected={selected === figure.id}>
            <TopRow onClick={handleSelectFigure}>
                <p>{figure.name}</p>
                <DeleteFigureButton onClick={handleDeleteFigure}>
                    <RiDeleteBack2Line />
                </DeleteFigureButton>
            </TopRow>
            <Row>
                <span>
                    <BiArea />
                </span>
                {figure.type === "polyline" ? (
                    <p>-</p>
                ) : (
                    <>
                        <p>
                            {area}
                            {areaUnit}
                        </p>
                        <InputSelect options={areaUnits} value={areaUnit} setValue={setAreaUnit} />
                    </>
                )}
            </Row>
            <Row>
                <span>
                    <AiOutlineArrowsAlt />
                </span>
                <p>
                    {distance}
                    {distanceUnit}{" "}
                </p>
                <InputSelect options={distanceUnits} value={distanceUnit} setValue={setDistanceUnit} />
            </Row>
        </ControlsWrap>
    );
};

export default FigureControls;

const ControlsWrap = styled.div`
    box-shadow: ${({ theme }) => theme.shadows.md};
    width: 100%;
    padding: 1rem 0;
    background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.secondary : theme.colors.primary)};
`;
const Row = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.4rem;
    > span {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > p {
        margin-right: auto;
    }
`;

const DeleteFigureButton = styled.button`
    background: none;
    border: none;
    padding: 0.25rem;
    cursor: pointer;
    :hover {
        > svg {
            color: ${({ theme }) => theme.colors.light};
            scale: 1.05;
        }
    }
    > svg {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const TopRow = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.4rem;
    > p {
        margin-right: auto;
    }
    :hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
    }
`;
