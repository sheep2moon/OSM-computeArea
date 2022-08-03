import React from "react";

const AreaResult = ({ area }) => {
    return <div>{(area / 10000).toFixed(2)}ha</div>;
};

export default AreaResult;
