import React from "react";

const DistanceResult = ({ distance }) => {
    return (
        <div>
            <p>{distance.toFixed(2)}m</p>
            <p>{(distance / 1000).toFixed(2)}km</p>
        </div>
    );
};

export default DistanceResult;
