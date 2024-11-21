import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Heading from './Heading'
import RecipeCard from './RecipeCard'
import './RecipeCards.css'
import Filter from './Filter'

const RecipeCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  return (
    <div>
      <div className='header'>
        <Heading />
        <Filter setFilters={setFilters}/>
        <Searchbar setSearchQuery={setSearchQuery} />
        <RecipeCard searchQuery={searchQuery} filters={filters} />
      </div>
    </div>

  )
}

export default RecipeCards