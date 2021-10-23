import React from 'react'
import '../Home/styles.scss';

import Wave from '../../assets/img/wave1.svg';
import Bootstrap from '../../assets/img/bootstrap.svg';
import Brave from '../../assets/img/brave.svg';
import Chrome from '../../assets/img/chrome.svg';
import Code from '../../assets/img/code.svg';
import Css from '../../assets/img/css.svg';
import Git from '../../assets/img/git.svg';
import Github from '../../assets/img/github.svg';
import Html from '../../assets/img/html.svg';
import Js from '../../assets/img/javascript.svg';
import Jquery from '../../assets/img/jquery.svg';
import Linux from '../../assets/img/linux.svg';
import Materialize from '../../assets/img/materialize.svg';
import Next from '../../assets/img/next.svg';
import Node from '../../assets/img/node.svg';
import Npm from '../../assets/img/npm.svg';
import Reacticon from '../../assets/img/iconreact.svg';
import Responsive from '../../assets/img/responsive.svg';
import Sass from '../../assets/img/sass.svg';
import Ts from '../../assets/img/typescript.svg';
import Ubuntu from '../../assets/img/ubuntu.svg';
import Whats from '../../assets/img/whatsapp.svg';
import Windows from '../../assets/img/windows.svg';
import Yarn from '../../assets/img/yarn.svg';

const Home = () => {
  return (
    <>
      <div className="homeBody">
        <img className="homeWave" src={Wave} alt="wave" />
        <div className="content">
          <h1 className="text">Olá! Me chamo Yuri, este é meu segundo Portfólio, onde de forma simples e pratica mostrarei algumas das tecnologias que conheço!</h1>
        </div>
        <div className="logos">
          <img src={Bootstrap} alt="Bootstrap" />
          <img src={Brave} alt="Brave" />
          <img src={Chrome} alt="Chrome" />
          <img src={Code} alt="VsCode" />
          <img src={Css} alt="Css" />
          <img src={Git} alt="Git" />
          <img src={Github} alt="GitHub" />
          <img src={Html} alt="Html" />
          <img src={Js} alt="JavaScript" />
          <img src={Jquery} alt="jQuery" />
          <img src={Linux} alt="Linux" />
          <img src={Materialize} alt="Materialize" />
          <img src={Next} alt="Nextjs" />
          <img src={Node} alt="Nodejs" />
          <img src={Npm} alt="Npm" />
          <img src={Reacticon} alt="ReactJs" />
          <img src={Responsive} alt="Responsive" />
          <img src={Sass} alt="Sass/scss" />
          <img src={Ts} alt="TypeScript" />
          <img src={Ubuntu} alt="Ubuntu" />
          <img src={Whats} alt="WhatsApp" />
          <img src={Windows} alt="Windows" />
          <img src={Yarn} alt="Yarn" />
        </div>
      </div>
    </>
    
  )
}
export default Home;