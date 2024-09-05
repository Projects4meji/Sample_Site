import React from "react";

function Feedback(props) {
    return(
        <div>
            <p className="flex flex-col gap-2">
                <span className="text-lg">{props.office}</span>
                <span className="text-gray-400 text-md">{props.street}</span>
            </p>
        </div>
    );
}

export default Feedback;