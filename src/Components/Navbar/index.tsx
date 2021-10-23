import React , {useEffect} from 'react'
import '../Navbar/styles.scss';

import Logo from '../../assets/img/gitYuri1.svg';
import Wave from '../../assets/img/wave1.svg';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg">
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
    </header>
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="Contact" className="nav-link">
                CONTACT
              </a>
            </li>
        </ul>     
        <img className="wave" src={Wave} alt="" />
      </div>
  </nav>
  )
}
export default Navbar;