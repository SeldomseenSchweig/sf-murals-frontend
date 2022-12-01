import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './form.css'




const LoginForm = ({login}) =>{
    const history = useHistory()
    const initialState = {
        username:"",
        password:""
        
    }

    const [formData, setFormData] = useState(initialState)
    const handleChanges = e => {
        const {name, value} = e.target

        setFormData( data => ({
            ...data,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {username,password} = formData
        login({username,password});
        history.push('/')

    }


    return (

        <form  className="offset-lg-4" onSubmit={handleSubmit}>
            <div className="mb-3">
            <label 
            className="form-label"
            htmlFor="username"> Username</label>
            <input
            className="form-control i"
            id="username" 
            type="text" 
            name="username"
            placeholder='username' 
            value={formData.username} 
            onChange={handleChanges}/>
            </div> 
            <div className="mb-3">

            <label
            className="form-label"
             htmlFor="password">password</label>
            <input
            className="form-control i"
            id="password" 
            type="password" 
            name="password"
            placeholder="password"
            value={formData.password} 
            onChange={handleChanges}/>


            </div>



            <button className="btn btn-primary" >Submit</button>
        </form>
    )
}

export default LoginForm;