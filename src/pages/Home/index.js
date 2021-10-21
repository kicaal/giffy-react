import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'


export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input onChange={handleChange} placeholder="Search a gif here..." type="text" value={keyword}/>
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Los gifs más populares</h3>
          <ListOfGifs gifs={gifs}/>
        </div>
        <div className="App-category">
          <TrendingSearches/>
        </div>
      </div>
      
    </>
  )
}