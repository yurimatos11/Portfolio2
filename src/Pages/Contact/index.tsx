import React from 'react'
import '../Contact/styles.scss';

import Wave from '../../assets/img/wave1.svg';

const Contact = () => {
  return (
    <>
      <div className="contactBody">
        <img className="contactWave" src={Wave} alt="wave" />
      </div>
    </>
  )
}
export default Contact;