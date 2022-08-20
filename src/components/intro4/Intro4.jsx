import { useState } from "react";
import { Mail, Call, Home, LinkedIn, GitHub, Instagram, ArrowUpward } from "@material-ui/icons";
import "./intro4.scss";

const Contact = () => {

  const [inputData, setInputData] = useState({
    user_name: '',
    user_subject: '',
    user_email: '',
    message: ''
  })

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let err = {
      user_name: inputData.user_name,
      user_subject: inputData.user_subject,
      user_email: inputData.user_email,
      message: inputData.message,
    }

    if (Object.values(err).some(val => val === '')) {
      alert('Please fill all fields')
    } else {
      alert('all')
    }
  }

  return (
    <div className="b-contact" id="contact">
      <a href="#home">
        <div className="to-top">
          <ArrowUpward/>
        </div>
      </a>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              <Call className="c-icon" />
              9048487142
            </div>
            <div className="c-info-item">
              <Mail className="c-icon" />
              <a href="mailto:midhlaj@gmail.com">midhlaj003@gmail.com</a>
            </div>
            <div className="c-info-item">
              <Home className="c-icon" />
              Calicut, Kerala
            </div>
            <div className="c-social">
              <a href="https://www.linkedin.com/in/midhlaj-ap-172993199/" target="_blank"><LinkedIn className="social-ic"/></a>
              <a href="https://github.com/midhlaj99" target="_blank"><GitHub className="social-ic"/></a>
              <a href="https://www.instagram.com/mid_h_laj/" target="_blank"><Instagram className="social-ic"/></a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" onChange={handleChange} value={inputData.user_name}/>
            <input type="text" placeholder="Subject" name="user_subject" onChange={handleChange} value={inputData.user_subject}/>
            <input type="text" placeholder="Email" name="user_email" onChange={handleChange} value={inputData.user_email}/>
            <textarea rows="5" placeholder="Message" name="message" onChange={handleChange} value={inputData.message}/> 
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;