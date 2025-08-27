//import "../css/bootstrap.min.css"
import "../css/bootstrap-icons.css"
import "../css/magnific-popup.css"
import "../css/templatemo-first-portfolio-style.css"
import logo from "../images/logo4.png"
import "../js/jquery.min.js"
import "../js/bootstrap.min.js"
import "../js/jquery.sticky.js"
import "../js/click-scroll.js"
import "../js/jquery.magnific-popup.min.js"
import "../js/magnific-popup-options.js"
import "../js/custom.js"

function NavBar ()
{
return (

 <nav class="navbar navbar-expand-lg">
            <div class="container">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a href="index.html" class="navbar-brand mx-auto mx-lg-0"><img src={logo}></img></a>

               

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-lg-5">
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_1">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_2">About Me</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_3">Projects</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_4">Education</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="#section_5">Contact</a>
                        </li>
                    </ul>

                    
                </div>

            </div>
        </nav>

)

}

export default NavBar