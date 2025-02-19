import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Recipies from '../components/atoms/Recipies'
import Loader from '../components/atoms/Loader'
// API_KEY = process.env.REACT_APP_API_KE/Y

const Home = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

    const getMeal = async() =>{
      setLoading(true)
        try{
            const resp = await axios.get(`https://dummyjson.com/recipes`)
            console.log(resp.data.recipes)
            setLoading(false)
            setMeals(resp.data.recipes)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
       getMeal()
    },[])
    
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <h1 className='text-xl'>Search for a meal</h1>
        <form action="">
          <input className='border-solid border-2 border-sky-500' type='text'></input>
          <button type='submit' className='rounded-full bg-sky-500/50 border-solid border-2 border-sky-500 w-20' >Search</button>
        </form>
      </div>
      {loading ? 
        <Loader/>
      :
        <Recipies meals={meals} />
      } 
    </div>
  )
}

export default Home
