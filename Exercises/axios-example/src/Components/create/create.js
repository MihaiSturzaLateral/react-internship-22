import React from 'react'
import axios from 'axios'
import {Formik,Form, Field, ErrorMessage} from 'formik'
import {useNavigate } from 'react-router-dom'
import './create.css';

const Create1=()=>{
  const navigate=useNavigate();

  const submitHandler=(values)=>{
    axios.post(
      ' https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud',values)
          .then(()=>{
                     navigate('/read')
                     }
              )
  }
    return(
      <>
        <div className='title'>
            <h2>Contact</h2>
        </div> 
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
      
        if(values.message.length<3)
          errors.message='Invalid message'

         return errors;
       }
       
      }
      onSubmit={(values) =>{submitHandler(values)}
        
      }
    
     >
       {({ isSubmitting }) => (
         <Form className='form'>
          <div className='container'>Send us a message</div>
          <div className='form-control'>
                <label type='text' htmlFor='email'>Your email:</label>
                <Field type="email" name="email"/>
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
            <button className='btnSend' type="submit">
             Send message
            </button>
           </div>
         </Form>
       )}
     </Formik>
     
     </>
    )
}
export default Create1;