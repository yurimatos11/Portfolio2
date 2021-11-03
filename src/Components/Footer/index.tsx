import React from 'react';

import './styles.scss';

import Wave from '../../assets/img/wave.svg';

const Footer: React.FC = () => {
  return <>
   <img className="footerWave" src={Wave} alt="Wave" />
    <div className="footerBody">
      <div className="footerContent">
        <p>Portfolio2 Create by Yuri Matos</p>
      </div>  
    </div>
  </>;
}

export default Footer;