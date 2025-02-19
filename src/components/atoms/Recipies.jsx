import React from 'react'

const Recipies = ({meals}) => {
  return (
    <div>
       <div className='grid grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {meals.map((meal, index) =>{
              return(
                <div className='shadow-md rounded-lg p-2 m-8 font-semibold'>
                     <img src={meal.image} className='w-50 h-50' /> 
                     <p>Name: {meal.name}</p>
                </div>
                 
              )
          })}
      </div>
    </div>
  )
}

export default Recipies
