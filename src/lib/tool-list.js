import { RiMapPinAddLine } from "react-icons/ri";
import { BsArrowsMove } from "react-icons/bs";
import { GiArrowCursor } from "react-icons/gi";
import { TbPolygon, TbMapPinOff } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";

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
        tooltip: "Dodaj trasę",
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
