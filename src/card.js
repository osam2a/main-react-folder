import React from 'react'

function Card(props) {
    return(
        <div className='flex  justify-start items-center bg-white w-fit h-fit p-2 '>
    
        <h1>{props.firstName + " " + props.lastName}</h1>

              </div>
    )
}

export default Card