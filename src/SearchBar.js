import React, {useState} from 'react'

const SearchBar = ({search}) => {
    
    const [value , setValue] = useState('')
    const handleChange = (e)=>{
        setValue(e.target.value)
        }
    const handleSubmit = (e) =>{
            e.preventDefault()
            search(value)

        }
    return(
        <form className='searchForm'onSubmit={handleSubmit} >
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input onChange={handleChange} 
            type="text"
            id="header-search"
            value={value}
            placeholder="search"
            name="search" 
        />
        <button >Search By Street</button>
    </form>

    )

    };

export default SearchBar;