import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css'
const Searchbar = ({setSearchQuery}) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  }
  return (
    <div className='searchbar'>
      <FontAwesomeIcon icon={faSearch} className='searchbtn'/>
      <input
      type='text'
      placeholder='Search...'
      className='inputbar'
      onChange={handleChange}/>
    </div>
  )
}

export default Searchbar