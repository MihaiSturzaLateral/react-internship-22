import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default function Form() { 

    const sendDataToAPI = () => {
        axios.post('https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud', formik.values)
    }

    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        onSubmit: values => {
            alert("Form submitted!");
            console.log('Form data --> ', values);
        },
        validate: values => {
            let errors = {}

            if (!values.name) {
                errors.name = 'Required'
            }
            if (!values.email) {
                errors.email = 'Required'
            } else if (!values.email.match(regex)) {
                errors.email = 'Invalid email format'
            }
            if (!values.message) {
                errors.message = 'Required'
            }
            return errors;
        }
    
    });

    return(
        <div className='main'>
            <h1>Create a new entry</h1><br/><br/>
            <div className='bigform'>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label><br/>
                    <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} onReset={formik.handleReset}/>
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div><br/>

                <div className="form-control">
                    <label htmlFor='name'>Name</label><br/>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}  onReset={formik.handleReset}/>
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div><br/>

                <div className="form-control">
                    <label htmlFor='message'>Message</label><br/>
                    <input type='text' id='message' name='message' onChange={formik.handleChange} value={formik.values.message}  onReset={formik.handleReset}/>
                    {formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
                </div> <br/>

            
            <div className='formbuttons'>
                <Button type='reset' className='formreset' variant="secondary">Reset</Button>
                <Button type='submit' className='formsubmit' variant="success" onClick={sendDataToAPI}>Submit</Button>
                </div>
            </form>

        </div>
        </div>
    )
}