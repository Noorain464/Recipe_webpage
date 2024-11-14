import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Heading from './Heading'
import RecipeCard from './RecipeCard'
import './RecipeCards.css'

const RecipeCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <div className='header'>
        <Heading />
        <Searchbar setSearchQuery={setSearchQuery} />
        <RecipeCard searchQuery={searchQuery} />
      </div>
    </div>

  )
}

export default RecipeCards