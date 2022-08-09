import React, { useEffect } from 'react'
import { useState } from 'react'
import "./intro4.scss"

function Testimonial() {

  const [inputData, setInputData] = useState({
    user_name: '',
    user_subject: '',
    user_email: '',
    message: ''
  })

  const handleChange = (e) =>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let err = {
      user_name:inputData.user_name,
      user_subject:inputData.user_subject,
      user_email:inputData.user_email,
      message:inputData.message,
    }

    if(Object.values(err).some(val => val ==='')){
      alert('Please fill all fields')
    } else{
      alert('all')
    }
  }

  return (
    <div className='contact-me' id='contact'>
      <div className="top">
        <h2>Contact Me</h2>
      </div>
      <div className="bottom">
        <div className="contact-box">
          <div className="left">
            <img src="assets/contact.jpg" alt="" width='100%' height='100%' />
          </div>
          <div className="right">
            <div className='contact-form'>
              <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Name" value={inputData.user_name} name="user_name" />
                <input onChange={handleChange} type="text" placeholder="Subject" value={inputData.user_subject} name="user_subject" />
                <input onChange={handleChange} type="text" placeholder="Email" value={inputData.user_email} name="user_email" />
                <textarea onChange={handleChange} rows="3" placeholder="Message" value={inputData.message} name="message" />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial