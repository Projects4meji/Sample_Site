import React from "react";

function Team(props) {
    return(
        <div className="flex flex-col justify-center text-center space-y-4 hover:-translate-y-5 transition-bg duration-300">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-lg" src={props.img} alt=""/>
            </div>
            <h5>{props.name}</h5>
            <p className="text-sm text-gray-400">{props.title}</p>
        </div>
    );
}

export default Team;