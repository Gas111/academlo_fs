import React from 'react'

const CardHobbies = ({color,title}) => {

    const hobbies={
        title:"Hobbies dafdsaf",
        first:"MUsica",
        second:"Ir a la playa",
        thirth: "Videojuegos",

    }

    const food={
        title:"Comida favorita",
        first:"portoros",
        second:"casuelalaya",
        thirth: "completouegos",

    }

    const tech={
        title:"MI stack Tech",
        first:"html",
        second:"css",
        thirth: "reack",

    }


  
    const objectColor={

backgroundColor:color,

    }

   return (
    <div  className='card-caracterist' style={objectColor}>
      <h2 className='card-caracterist__title'>{title==="Hobbies" ? hobbies.title: title==="Tech"? tech.title:title=="Food"?food.title:""}</h2>
      <ul className='card-caracterist__ul'>
        <li>{title==="Hobbies" ? hobbies.first: title==="Tech"? tech.first:title=="Food"?food.first:""}</li>
        <li>{title==="Hobbies" ? hobbies.second: title==="Tech"? tech.second:title=="Food"?food.second:""}</li>
        <li>{title==="Hobbies" ? hobbies.thirth: title==="Tech"? tech.thirth:title=="Food"?food.thirth:""}</li>
        
      </ul>
    </div>
  )
}

export default CardHobbies
