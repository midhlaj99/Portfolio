import "./intro.scss"
import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <div className="intro" id="home">
      <div className="left">
        <div className="main_wrapper">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Midhlaj ap</h1>
            <h4>
              <Typewriter
                options={{
                  strings: ['React Developer','2+ years experience','JavaScript Developer','MERN stack'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
        </div>
      </div>

      <div className="right">
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro