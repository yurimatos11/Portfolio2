import React from 'react'
import '../Contact/styles.scss';

import Wave from '../../assets/img/wave1.svg';

const Contact = () => {
  return (
    <>
      <div className="contactBody">
        <img className="contactWave" src={Wave} alt="wave" />
        <div className="contactCard">
          <a href="https://www.linkedin.com/in/yuri-matos-82954717a/"><i className="fab fa-linkedin"></i></a>
          <a href="https://outlook.live.com/mail/0/inbox"><i className="fas fa-at"></i></a>
          <a href="https://github.com/yurimatos11"><i className="fab fa-github"></i> </a>
        </div>
      </div>
    </>
  )
}
export default Contact;