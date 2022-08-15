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
                  strings: ['React Developer', 'JavaScript Developer', 'MERN stack', '2 years experience'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>

            <div className="btn-grp">
              <a href="assets/midhlaj.pdf" download>
               <button className="btn-1">Download CV</button>
              </a>
              <a href="#contact">
                <button className="btn-2">Contact</button>
              </a>
            </div>
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