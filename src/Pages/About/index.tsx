import React from 'react'
import '../About/styles.scss';

import Wave from '../../assets/img/wave1.svg';


const About = () => {
  return (
    <>
      <div className="aboutBody">
        <img className="aboutWave" src={Wave} alt="wave" />
      </div>
    </>
  )
}
export default About;