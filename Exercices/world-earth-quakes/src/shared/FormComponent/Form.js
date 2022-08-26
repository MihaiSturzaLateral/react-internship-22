import React, { useEffect } from "react";
import { useFormik } from 'formik'

const Form = ({ onSubmit, messageData }) => {

    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    // console.log(messageData);

    const formik = useFormik({
        initialValues: {
            name: messageData?.name ? messageData?.name : '',
            email: messageData?.email ? messageData?.email : '',
            message: messageData?.message ? messageData?.message : ''
        },
        onSubmit: (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
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
            return errors; // must return an object with errors
        }
    });


    // useEffect(() => {
    //     console.log("Form values --> ", formik.values);
    // })


    return (
        <div className="container border py-4 w-50 d-flex flex-column align-content-center">
            <form onSubmit={formik.handleSubmit}>

                <div className="my-4">
                    <label className="d-block" htmlFor='name'>Name</label>
                    <input className="w-100" type='text' id='name' name='name' placeholder="Your Name" onChange={formik.handleChange} value={formik.values.name} />
                    {/* conditional rendering */}
                    {formik.errors.name ? <div className="error text-danger">{formik.errors.name}</div> : null}
                </div>

                <div className="my-4">
                    <label className="d-block" htmlFor='email'>E-mail</label>
                    <input className="w-100" type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div className="error text-danger">{formik.errors.email}</div> : null}
                </div>

                <div className="my-4">
                    <label className="d-block" htmlFor='message'>Message</label>
                    <textarea className="w-100" type='text' id='message' name='message' onChange={formik.handleChange} value={formik.values.message} />
                    {formik.errors.message ? <div className="error text-danger">{formik.errors.message}</div> : null}
                </div>

                <div className="d-flex flex-end justify-content-end">
                    <button className="mx-1 btn btn-dark" type='submit'>Reset Form</button>
                    <button className="mx-1 btn btn-outline-primary" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;