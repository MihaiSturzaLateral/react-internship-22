import React, { useEffect } from "react";
import { useFormik } from 'formik'

const Form = () => {

    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    const formik = useFormik({
        initialValues: {
            name: 'Your Name',
            email: '',
            channel: ''
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
            if (!values.channel) {
                errors.channel = 'Required'
            }
            return errors; // must return an object with errors
        }
    });


    // useEffect(() => {
    //     console.log("Form values --> ", formik.values);
    // })


    console.log("Form errors --> ", formik.errors);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                    {/* conditional rendering */}
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />
                    {formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;