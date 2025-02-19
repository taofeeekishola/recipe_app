import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleRecipe = () => {
    const {id} = useParams()
    const [meals, setMeals] = useState([])

    const getMeal = async(id) =>{
 
        try{
            const resp = await axios.get(`https://dummyjson.com/recipes/${id}`)
            console.log(resp.data)
            setMeals(resp.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(id){
            getMeal(id)
        }
       
    },[id])
  return (
    <div>
       <div className='grid grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <div className='shadow-md rounded-lg p-2 m-8 font-semibold'>
                     <img src={meals.image} className='w-50 h-50' /> 
                     <p>Name: {meals.name}</p>
                </div>
      </div>
    </div>
  )
}

export default SingleRecipe
