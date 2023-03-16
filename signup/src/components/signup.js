import React , {useState} from 'react';
import { useFormik } from 'formik';
import swal from 'sweetalert';

const validate = values =>{
    const errors = {};
    if(!values.firstname){
        errors.firstname = '*Required';
    }else if(values.firstname.length>10){
        errors.firstname = "*Must be 10 characters or less";
    }

    if(!values.lastname){
        errors.lastname = "*Required";
    }else if(values.lastname.length > 10){
        errors.lastname = "*Must be 10 characters or less";
    }

    if(!values.email){
        errors.email = "*Required";
    }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "*Invalid Email ";
    }

    if(!values.password){
        errors.password = "*Required";
    }else if(values.password.length > 12){
        errors.password = "*Maximum 12 characters";
    }else if(values.password.length < 4){
        errors.password = "*Minimum 4 Characters";
    }

    if(!values.confirmpassword){
        errors.confirmpassword = "*Required";
    }else if(values.password !== values.confirmpassword){
        errors.confirmpassword = "*Password must match";
    }
    return errors;

}

const Signup = () =>{
    
    const formik = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:'',
        },

        validate,
        onSubmit : (values , {resetForm} )=> {
            swal("Registered successfully");
            resetForm({values:''});
        }
    });
    console.log(formik.values);
    return(
            <div className='main'>
                <div className='signup'>
                    <h2>Sign Up </h2>
                    <form onSubmit = {formik.handleSubmit} >
                        <input type='text' placeholder='First Name' name='firstname' autoComplete='off' 
                        onChange = {formik.handleChange} value = {formik.values.firstname} onBlur = {formik.handleBlur}/>
                        {
                            formik.touched.firstname && formik.errors.firstname ? 
                             <span>{formik.errors.firstname}</span> : null
                        }
                        <input type='text' placeholder='Last Name' name='lastname' autoComplete='off' 
                        onChange = {formik.handleChange} value = {formik.values.lastname} onBlur = {formik.handleBlur} />
                        {
                            formik.touched.lastname && formik.errors.lastname ?
                             <span> {formik.errors.lastname} </span> : null
                        }
                        <input type='text' placeholder='Email' name='email' autoComplete='off' 
                        onChange = {formik.handleChange} value = {formik.values.email} onBlur = {formik.handleBlur} />
                        {
                            formik.touched.email && formik.errors.email ?
                             <span> {formik.errors.email} </span> : null
                        }
                        <input type='password' placeholder='password' name='password' autoComplete='off' 
                        onChange = {formik.handleChange} value = {formik.values.password} onBlur = {formik.handleBlur} />
                        {
                            formik.touched.password && formik.errors.password ?
                             <span> {formik.errors.password} </span> : null
                        }
                        <input type='password' placeholder='confirm password' name='confirmpassword' autoComplete='off' 
                        onChange = {formik.handleChange} value = {formik.values.confirmpassword} onBlur = {formik.handleBlur} />
                        {
                            formik.touched.confirmpassword && formik.errors.confirmpassword ?
                             <span> {formik.errors.confirmpassword} </span> : null
                        }
                        <input type='submit' value="Submit" />
                    </form>
                </div>
                
            </div>
            
        )
    
}

export default Signup;