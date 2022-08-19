import React from 'react'
import Title from '../../Components/Title/Title';
import {Formik,Form, Field, ErrorMessage,useFormik} from 'formik'
import './ContactPage.css'
const ContactPage=()=>{
    return(
        <>
          <Title text='Contact'/> 
          
     <Formik
      
       initialValues={{ email: '', name: '', message:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.name) {
          errors.name = 'Required'
         }
      
        if(values.message.length<30)
          errors.message='Invalid message'

         return errors;
       }
       
      }
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className='form'>
          <div className='container'>Send us a message</div>
          <div className='form-control'>
                <label type='text' htmlFor='email'>Your email:</label>
                <Field type="email" name="email" />
                <ErrorMessage className='error' name="email" component="div" />
          </div>

          <div className='form-control'>
                <label type='text' htmlFor='name'>Name:</label>
                <Field type="text" name="name" />
                <ErrorMessage className='error' name="name" component="div" />
           </div>


           <div className='form-control'>
                <label type='text' htmlFor='message'>Message:</label>
                <Field as='textarea' name='message'/>
                <ErrorMessage className='error' name="message" component="div" />
          </div>
          
          <div className='buttons'>
            <button className='btnReset' type="reset" onClick={(e)=>Formik.resetForm()}>
             Reset form
            </button>
            <button className='btnSend' type="submit" disabled={isSubmitting}>
             Send message
            </button>
           </div>
         </Form>
       )}
     </Formik>
     
     </>
    )
}
export default ContactPage;