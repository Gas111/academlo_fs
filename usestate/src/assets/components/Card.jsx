import React from 'react'




const Card = () => {
    

    const title="targeta";
    const person={
    name:"gaston",
    age: "42",
    favoriteMusic:"country",
    favoriteColor:"blue",};
    

    return (
    <div className="main">
    <ul className="card">
    <h2>{title}</h2>
      <li className='card__li'>{person.name}</li>
      <li className='card__li'>{person.age}</li>
      <li className='card__li'>{person.favoriteMusic}</li>
      <li className='card__li'>{person.favoriteColor}</li>
    </ul>
  </div>
  );
}

export default Card