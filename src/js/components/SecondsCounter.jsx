import React from "react";

const SecondsCounter = (props) => {
    return (
        <div className="bg-dark text-white d-flex justify-content-center gap-3 p-4 fs-1">
            <div className="border rounded p-3 text-white">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="border rounded p-3">{props.digitSix}</div>
            <div className="border rounded p-3">{props.digitFive}</div>
            <div className="border rounded p-3">{props.digitFour}</div>
            <div className="border rounded p-3">{props.digitThree}</div>
            <div className="border rounded p-3">{props.digitTwo}</div>
            <div className="border rounded p-3">{props.digitOne}</div>
        </div>
    );
};

export default SecondsCounter;