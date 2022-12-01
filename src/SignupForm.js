import { Alert } from "reactstrap";
import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";


import './form.css'



const Signup = ({register, errors,setErrors}) =>{
    const {currentUser} = useContext(CurrentUserContext)
    
    if(currentUser){
        return <Redirect to="/"/>
    }
    const history = useHistory()
    

    const initialState = {
        username:"",
        email:"",
        password:"",
        firstName:"",
        lastName:""

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
       
            let info = register(formData);

            async function check(info){
                await info.then(function(result){
                    if(!result ){
                        return
                    }else{
                        setErrors(result)
                    }

                })

            }
        check(info)


        if(!errors[0]){
        setFormData(initialState)
        
        }
  
    }


    


    return (
        <>
        {errors[0] ? <Alert key="warning" variant="warning"> {errors[0]} </Alert> :''}
        <form className="offset-lg-4" onSubmit={handleSubmit}>
            <div className="mb-3"> 
                <label className="form-label" htmlFor="username"> Username</label>
                <input className="form-control i"
                id="username" 
                type="text" 
                name="username"
                placeholder='username' 
                value={formData.username} 
                onChange={handleChanges}
                required/>
            </div>

            <div className="mb-3" >
                <label className="form-label" htmlFor="password">password</label>
                <input 
                className="form-control i" 
                id="password" 
                type="password" 
                name="password"
                placeholder="password"
                value={formData.password} 
                onChange={handleChanges}
                required/>
            </div>

            <div className="mb-3" >
                <label className="form-label" htmlFor="firstName"> First Name</label>
                <input 
                className="form-control i"
                id="firstName" 
                type="text" 
                name="firstName"
                placeholder='First Name' 
                value={formData.firstName} 
                onChange={handleChanges}
                required
                />
            </div>
       

            <div className="mb-3">
                <label className="form-label" htmlFor="lastName"> Last Name</label>
                <input
                className="form-control i"
                id="lastName" 
                type="text" 
                name="lastName"
                placeholder='Last Name' 
                value={formData.lastName} 
                onChange={handleChanges}
                required/>

            </div>



            <div className="mb-3">
                <label className="form-label" htmlFor="email">email</label>
                <input
                className="form-control i"
                id="email" 
                type="email" 
                name="email"
                placeholder="email"
                value={formData.email} 
                onChange={handleChanges}
                required/>
            </div>


            <button className="btn btn-primary" >Register</button>

                
  

            
        </form>
        
        </>
    )
}
export default Signup;