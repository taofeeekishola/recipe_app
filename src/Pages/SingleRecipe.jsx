import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/atoms/Loader'
import FoodDetails from '../components/atoms/FoodDetails'

const SingleRecipe = () => {
    const {id} = useParams()
    const [meals, setMeals] = useState({})
    const [loading, setLoading] = useState(false)

    const getMeal = async(id) =>{
        setLoading(true)
        try{
            
            const resp = await axios.get(`https://dummyjson.com/recipes/${id}`)
            setMeals(resp.data)
           
        }catch(error){
            console.log(error)
        }finally{
             setLoading(false)
        }
    }

    useEffect(()=>{
        if(id){
            getMeal(id)
        }
       
    },[id])
  return (
    <div>
        {loading ? 
            <Loader/>
            :
            <FoodDetails  meals={meals} />
        }
      
    </div>
  )
}

export default SingleRecipe
