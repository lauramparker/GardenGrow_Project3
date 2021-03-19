import React from "react";
import "./style.css";

//table may/may not have lines
//generic plant image appears inside table on Garden page and is filled in as user selects plants
function Grid(props) {
    return (
        <table>

            <img alt="Plant Image" src={plantImg} className="img" />
        </table>
    );
}

export default Grid;
