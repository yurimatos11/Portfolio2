import React from 'react'
import '../Home/styles.scss';

import Wave from '../../assets/img/wave1.svg';

const Home = () => {
  return (
    <>
      <div className="homeBody">
        <img className="homeWave" src={Wave} alt="wave" />
      </div>
    </>
    
  )
}
export default Home;