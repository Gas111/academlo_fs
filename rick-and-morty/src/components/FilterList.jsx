import React from 'react'

const FilterList = ({suggestedList,setLocation}) => {

const handleClick =(id)=>{
setLocation(id)

}

    return (
    <div>
        <ul>

        {suggestedList?.map((location) =>{return (<li onClick={()=>handleClick(location.id)} key={location.id}>{location.name}</li>)})}
        </ul>
    </div>
  )
}

export default FilterList