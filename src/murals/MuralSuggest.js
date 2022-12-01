import React, {useState, useContext} from 'react';
import CurrentUserContext from "../CurrentUserContext";
import { Redirect } from 'react-router-dom';






const MuralSuggest =({suggest})=>{

    const {currentUser} = useContext(CurrentUserContext)    
    if(!currentUser){
        return <Redirect to="/"/>
    }
    const INITIAL_STATE = {
        artist:"2",
        street_address:"2",
        img:"2",
    }
    const [formData, setFormData] = useState([INITIAL_STATE])
    const handleChange = (e) =>{

        const {name,value} = e.target;
        setFormData(formData =>( {
            ...formData,
            [name]:value
         }))
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        formData.user_id = currentUser.user.username
        // console.log(currentUser.user.username)
        console.log(formData)

        suggest(formData)
        setFormData(INITIAL_STATE)

    } 


    return (
        <>
        
        <form className="offset-lg-4" onSubmit={handleSubmit} >
        <div className="mb-3">
            <label className="form-label" htmlFor='artist'> Artist Name </label>
            <input
            className="form-control i" 
            id='artist'
            name='artist'
            type='text'
            placeholder='Artist Name'
            value={formData.artist}
            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor='street_address'> Address </label>
            <input
            className="form-control i" 
            type="text"
            name='street_address'
            onChange={handleChange}
            value={formData.street_address}
            id="street_address"

            />
            </div>
            <div className="mb-3">
                <label htmlFor='img'> Image </label>
                <input
                className="form-control i"
                type="text"
                name='img'
                onChange={handleChange}
                value={formData.img}
                id="img"

                />
            </div>

          <button>Submit</button>  
        </form>
        </>
        
    )



}

export default MuralSuggest;