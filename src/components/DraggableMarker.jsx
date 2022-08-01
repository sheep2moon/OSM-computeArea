import { useMemo, useRef } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import { RiDeleteBin2Line } from "react-icons/ri";
import styled from "styled-components";

export const DraggableMarker = ({
  position,
  setPosition,
  deleteMarker,
  index,
}) => {
  const markerRef = useRef(null);
  const eventHandlers = {
    dragend: () => {
      const marker = markerRef.current;
      if (marker != null) {
        setPosition(marker.getLatLng(), index);
      }
    },
  };

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup>
        <DelBtn onClick={(e) => deleteMarker(e, index)}>
          <RiDeleteBin2Line />
        </DelBtn>
      </Popup>
    </Marker>
  );
};

const DelBtn = styled.button`
  padding: 1rem;
`;
