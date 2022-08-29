import React from 'react';
import { useFormik } from 'formik';
import './Form.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {

    function onChange(value) {
        console.log('Captcha value:', value);
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

    return (
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

                <ReCAPTCHA
            className='robot'
        sitekey="6LfwMYAhAAAAAEnTKi6Nf-tA896FTxeckgSsSmO4"
        onChange={onChange}  onReset={formik.handleReset}/> <br/>
            <div className='formbuttons'>
                <button type='reset' className='formreset'>Reset</button>
                <button type='submit' className='formsubmit'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Form;

