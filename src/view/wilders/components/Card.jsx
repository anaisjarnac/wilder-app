import axios from 'axios';
import React from 'react';
import Badge from './Badge';

function Card({wilder}) {

  const getRemove = () => {
    axios.delete(`/api/wilder/${wilder._id}`)
  }

  const handleDelete = () => {
    getRemove();
  }

  return (
    <div className="p-5 w-56 h-90 m-10 rounded-sm border-purple-300 border mx-auto ">
      <button onClick={handleDelete}>
      <img src="./assets/images.png" alt='croix' className="w-6" />
      </button>
      <img src="./assets/face.png" alt="face" className="w-40 mx-auto"/>
      <div className="text-center m-5">
      <h1 className="text-lg font-bold text-purple-400 m-3">{wilder.name}</h1>
      <p className="m-2 font-bold">{wilder.city}</p>
      <p className="m-2">{wilder.description}</p>
      <h2 className="font-bold text-yellow-400 m-3">Wild Skills:</h2>
      <div className="m-2">{wilder.skills.map((skill) => 
      <Badge skill={skill} />)}
      </div>
      </div>
    </div>
  );
}

export default Card;