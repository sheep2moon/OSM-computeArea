import React from "react";
import { FeatureGroup, useMap, WMSTileLayer } from "react-leaflet";

const Monuments = () => {
    const map = useMap();

    const monumentLayer = L.tileLayer
        .wms("https://usluga.zabytek.gov.pl/INSPIRE_IMD/service.svc/get?", {
            query_layers: "Immovable_Monuments",
            service: "WMS",
            request: "GetFeatureInfo",
            version: "1.3.0",
            format: "image/png",
            style: "Default",
            bbox: map.getBounds().toBBoxString(),
            info_format: "text/html"
        })
        .addTo(map);

    return <></>;
};

export default Monuments;

//<WMSTileLayer styles="Default" transparent={true} layers="Immovable_Monuments" format="image/png" bounds={map.getBounds()} version="1.3.0" url="" />
