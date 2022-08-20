import React, { useEffect,useRef } from "react";
import { useFormik } from 'formik'
import ReCAPTCHA from "react-google-recaptcha"


const Form = () => {

    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const handleSubmit = () =>{
        
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
    }
    

    const formik = useFormik({
        initialValues: {
          
        },
        onSubmit: (values,{resetForm}) => {
            alert("Form submitted!");
            console.log('Form data --> ', values);
            handleSubmit();
            resetForm();
        },
        validate: values => {
            let errors = {}

            if (!values.name||values.name==='Your Name') {
                errors.name = 'Required'
            }
            if (!values.email||values.email==='name@gmail.com') {
                errors.email = 'Required'
            } else if (!values.email.match(regex)) {
                errors.email = 'Invalid email format'
            }
            if (!values.message||values.message==='Your message...') {
                errors.message = 'Required'
            }
            return errors; // must return an object with errors
        }
    });


    // useEffect(() => {
    //     console.log("Form values --> ", formik.values);
    // })


    console.log("Form errors --> ", formik.errors);
    const captchaRef = useRef(null)
    return (
        <div>
            <div className="send-us">
	<h2>Send us a message</h2>
</div>
            <form className="contact-form" onSubmit={formik.handleSubmit}>

            <div className="form-control">
                    <label htmlFor='email'>Your Email:</label>
                    <input type='text'  placeholder="Your Email" onFocus={(e) => e.target.placeholder = "" } id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' placeholder="Your Name" onFocus={(e) => e.target.placeholder = "" } id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                    {/* conditional rendering */}
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='message'>Message:</label>
                    <textarea  id='message' placeholder="Your Message" onFocus={(e) => e.target.placeholder = "" } name='message' onChange={formik.handleChange} value={formik.values.message} />
                    {formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
                </div>
                <div className="buts-form">
                <ReCAPTCHA 
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
                />
                <button className="btn-res" type='reset' onClick={()=>{formik.resetForm();
                                                                  captchaRef.current.reset();}}>Reset form</button>
                <button className="btn-sub" type='submit' >Send message</button>
                </div>
            </form>
        </div>
    )
}

export default Form;