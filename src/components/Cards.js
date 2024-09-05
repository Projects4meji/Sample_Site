import React from 'react';

function Cards(props) {
  return (
    <div className="flex justify-center mx-8 transition-transform duration-300 transform hover:-translate-y-5">
      <div className="flex flex-col p-6 text-center bg-white space-y-3">
        <div className="mx-auto flex justify-center items-center p-6 rounded-full shadow transition-bg duration-300 hover:bg-teal-500">
          <img className="w-10 h-10 filter brightness-0 hover:invert transition" src={props.img} alt="" />
        </div>
        <a href="./">
          <h5 className="mb-2 text-lg font-medium text-gray-900">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500">{props.text}</p>
      </div>
    </div>
  );
}

export default Cards;
