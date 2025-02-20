import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Recipies from '../components/atoms/Recipies'
import Loader from '../components/atoms/Loader'


const Home = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('') //this takes the value from the input and stores it
    const [query, setQuery] = useState('') //this takes the finally from the search 

    const getMeal = async() =>{
      setLoading(true)
        try{
            const resp = await axios.get(`https://dummyjson.com/recipes/${
              search === '' ? '' : `search?q=${query}`
            }`);
        
            setMeals(resp.data.recipes)
          
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
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
   
      { loading ? 
       ( <Loader/>)
      :
        meals.length === 0 ? (<p className="text-center text-red-500 mt-4">Meal not found...</p>)
      :
        (<Recipies meals={meals} />)
      } 

    </div>
  )
}

export default Home
