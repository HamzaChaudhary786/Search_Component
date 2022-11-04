import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className=' bg-slate-800 '>

        <div className='grid grid-cols-1 justify-items-center '>
          <div className=' mt-8'>
            <h1 className=' text-white cursor-pointer'>Search Your Favourite Movie</h1>
            <input type="text"  value={query} placeholder='Search Here...' onChange={(e) => setQuery(e.target.value)}  className=" mt-3 rounded text-center bg-slate-600 bg:opacity-30 border-white border text-white outline-none"/>

          </div>
          <div>
            <p className=' text-white mt-3 cursor-pointer'>
              {isError.show && isError.msg}
            </p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Search;