import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css'
const Searchbar = () => {
  return (
    <div className='searchbar'>
      <button className='searchbtn'><FontAwesomeIcon icon={faSearch}/></button>
      <input
      type='text'
      placeholder='Search...'
      className='inputbar'/>
    </div>
  )
}

export default Searchbar