import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Recipies from '../components/atoms/Recipies'
import Loader from '../components/atoms/Loader'
// API_KEY = process.env.REACT_APP_API_KE/Y

const Home = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')

    const getMeal = async() =>{
      setLoading(true)
        try{
            const resp = await axios.get(`https://dummyjson.com/recipes/${
              search === '' ? '' : `search?q=${query}`
            }`);
        
            setMeals(resp.data.recipes)
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
       getMeal()
    },[query])
    
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <h1 className='text-xl'>Search for a meal</h1>
        <form action="" onSubmit={(e)=>{
          e.preventDefault();
          setQuery(search)
        }}>
          <input className='border-solid border-2 border-sky-500' type='text' value={search} onChange={(e)=>{
            setSearch(e.target.value)
          }}></input>
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
