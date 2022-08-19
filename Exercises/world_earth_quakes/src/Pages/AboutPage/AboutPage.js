import React from 'react'
import Title from '../../Components/Title/Title';
import img_Muscas_Maria from './img_Muscas_Maria.jpg'
import './AboutPage.css'

const AboutPage=()=>{
    return(
        <>
          <div>
            <Title text="About"/>
          </div>
          <div className='container'>
            <div className='divImg'>
                <img src={img_Muscas_Maria} alt='pic' width={200} height={200}/>
            </div>
            <div className='info'>
                <p><span>{'Name: '}</span>{'Muscas Maria'}</p>
                <p><span>{'Age: '}</span>{'-'}</p>
                <p><span>{'Contact: '}</span>{'muscas.marya@yahoo.com'}</p>
            </div>
          </div>
          <p className='paragraph'>{'I am a qualified pharmacist, who had the courage during the COVID-19 pandemic to make the transition to the IT industry as a student. I am committed to learn and further develop my skills, to help me advance in my chosen career path. Motto: So in everything, do to others what you would have them do to you.(Matthew 7:12a)'}</p>
        </>
    )
}

export default AboutPage;