import 'boxicons'
import { useEffect, useState } from "react"
import profile from "../../Images/profile.jpeg"
import "./Header.css"
import { NavLink } from "react-router-dom";

function Headers() {

  const [Nav, SetNav] = useState(false)


  useEffect(()=>{
  })



  const ToogleNav = (e) => {
    SetNav(prev => !prev)
    const togglingNav = document.getElementById("togglingNav");
    const header = document.getElementById("root");
    if (Nav) {
      header.classList.add("mobile-nav-active")
      togglingNav.classList.add('bi-x')
      togglingNav.classList.remove('bi-list')

    }
    else {
      header.classList.remove("mobile-nav-active")
      togglingNav.classList.remove('bi-x')
      togglingNav.classList.add('bi-list')

    }
  }


  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <i class="bi bi-list mobile-nav-toggle d-xl-none" id="togglingNav" onClick={ToogleNav}  ></i>

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div class="d-flex flex-column">

          <div class="profile">
            <img src={profile} alt="" class="img-fluid rounded-circle" />
            <h1 class="text-light"><a href="/">Chaitanya</a></h1>
            <div class="social-links mt-3 text-center">
              <a href="https://www.facebook.com/people/Chaitanya-Khiratkar/100008049107079" class="facebook"><i class='bx bxl-facebook' ></i></a>
              <a href="https://www.instagram.com/chaitu___17/" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="https://github.com/chaitanya-k17" class="google-plus"><i class="bx bxl-github"></i></a>
              <a href="https://in.linkedin.com/in/chaitanya-khiratkar-734522191" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
 
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li><NavLink to="/"  activeClassName="active" onClick={ToogleNav}   class="nav-link scrollto"><i class="bx bx-home"></i> <span>Home</span></NavLink></li>
              {/* <li><NavLink to="/" activeClassName="active" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li> */}
              <li><NavLink to="/resume" activeClassName="active" onClick={ToogleNav}  class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></NavLink></li>
              <li><NavLink to="/gallery" activeClassName="active" onClick={ToogleNav} class="nav-link scrollto"><i class='bx bx-images'></i> <span>Gallery</span></NavLink></li>
              <li><NavLink  to="/contact" activeClassName="active" onClick={ToogleNav} class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></NavLink></li>

            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Headers;
