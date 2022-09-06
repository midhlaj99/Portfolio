import { useState } from "react";
import "./intro3.scss";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Intro3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < 3 - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      name: 'HTML',
      expertise: 'Experienced'
    },
    {
      name: 'CSS',
      expertise: 'Experienced'
    },
    {
      name: 'JavaScript',
      expertise: 'Experienced'
    },
    {
      name: 'React',
      expertise: 'Experienced'
    },
    {
      name: 'Redux',
      expertise: 'Experienced'
    },
    {
      name: 'Node JS',
      expertise: 'Intermediate'
    },
    {
      name: 'Mongo DB',
      expertise: 'Intermediate'
    },
    {
      name: 'Git',
      expertise: 'Experienced'
    },
    {
      name: 'Bootstrap',
      expertise: 'Experienced'
    },
    {
      name: 'Material ui',
      expertise: 'Experienced'
    },

  ]
  return (
    <div className="intro3" id="details">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="container">
          <h2>skills & knowledge</h2>
          <div className="item">
            <div className="skill-wrapper">
              {
                data.map((val, ky) => {
                  return (
                    <div key={ky} className="skill-wrapper-item">
                      <span className="skill-name">{val.name}</span>
                      <span className="skill-exp">{val.expertise}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="container">
          <h2>experience</h2>
          <div className="item">
            <div className="experience-wrapper">
              <div className="experience-item">
                <span className="compnay">GXX Pvt Ltd</span>
                <span className="dur">Associate Developer</span>
                <span className="dur">MAR 2022 - Present</span>
              </div>
              <div className="experience-item">
                <span className="compnay">MOJGENIE IT SOLUTION</span>
                <span className="dur">Junior Developer</span>
                <span className="dur">MAR 2021 - FEB-2022</span>
              </div>
              <div className="experience-item">
                <span className="compnay">BISTUX SOLUTION</span>
                <span className="dur">Intern</span>
                <span className="dur">JUN 2020- FEB 2021</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="container">
          <h2></h2>
          <div className="item">
            <h2></h2>
          </div>
        </div>
      </div>
      <span onClick={() => handleClick("left")} className="arrow left"><ArrowBackIosIcon /></span>
      <span onClick={() => handleClick()} className="arrow right"><ArrowForwardIosIcon /></span>
    </div>
  );
}