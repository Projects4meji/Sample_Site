import React from "react";

function Price(props){
    return(
    <div className="flex flex-col justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md sm:p-8 divide-y-2 hover:-translate-y-5 transition-bg duration-300 mx-14" style={{fontFamily:"'Poppins',sans-serif"}}>
        <div className="flex flex-col items-center justify-between gap-8 mb-9">
            <h5 className="text-xl font-medium text-gray-500">{props.title}</h5>
            <p className="text-3xl font-semibold">{props.price}</p>
            <p className="text-sm text-gray-500 ">{props.context}</p>
        </div>
        <div className="flex flex-col space-y-6 text-center pt-8">
            <p>Bandwidth: <span className="text-teal-500 font-medium">{props.bandWidth}</span></p>
            <p>Onlinespace: <span className="text-teal-500 font-medium">{props.oSpace}</span></p>
            <p>Support: <span className="text-teal-500 font-medium">{props.support}</span></p>
            <p className="text-teal-500 font-medium">{props.domi} <span className="text-black"> Domain</span></p>
            <p className="text-teal-500 font-medium">{props.hidden} <span className="text-black"> Hidden Fees</span></p>
            <div>
                <button type="button" className="text-white bg-teal-500 rounded-md py-2 px-4 border hover:border-black hover:scale-105 transition-bg duration-300">Join Now</button>
            </div>
        </div>
    </div>

    );
}

export default Price;