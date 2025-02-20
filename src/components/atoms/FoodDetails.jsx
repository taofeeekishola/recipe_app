import React from 'react'

const FoodDetails = ({meals}) => {
  return (
    <div>
        <h1 className='text-2xl ml-20 mt-10'>{meals.name}</h1>
       <div className='grid grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='shadow-md rounded-lg p-2 m-8 font-semibold'>
                    <img src={meals.image} className='w-50 h-50' /> 
                    <p>Name: {meals.name}</p>
                    <p>Prep Time(mins): {meals.prepTimeMinutes} </p>
                    <p>Cook Time(mins): {meals.cookTimeMinutes} </p>
                    <p>Diffculty: {meals.difficulty}</p>
            </div>
            <div className='shadow-md rounded-lg p-2 m-8 font-semibold'>
                <h1 className='text-lg font-bold mb-2'>Ingredients</h1>
                <ul className="list-disc list-inside space-y-1">
                     {meals?.ingredients?.map((ingredients,index)=>{
                        return(
                            <li>{ingredients}</li>
                        ) 
                    } )}
                </ul>
            </div>
             <div className='shadow-md rounded-lg p-2 m-8 font-semibold'>
                <h1 className='text-lg font-bold mb-2'>Ingredients</h1>
                <ol className="list-decimal list-inside space-y-1">
                     {meals?.instructions?.map((instruction,index)=>{
                        return(
                            <li>{instruction}</li>
                        ) 
                    } )}
                </ol>
            </div>
      </div>
    </div>
  )
}

export default FoodDetails
