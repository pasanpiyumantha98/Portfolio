import "../css/bootstrap.min.css"
import "../css/bootstrap-icons.css"
import "../css/magnific-popup.css"
import "../css/templatemo-first-portfolio-style.css"
import image1 from "../images/1.jpg"
import image2 from "../images/3.png"
import logo from "../images/logo4.png"
import NavBar from "../components/NavBar"


function Home(){
return(
 <>

       

       <NavBar/>

        <main>

            <section class="hero d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-7 col-12">
                            <div class="hero-text">
                                <div class="hero-title-wrap d-flex align-items-center mb-4">
                                   

                                    <h1 class="hero-title ms-3 mb-0">Pasan Piyumantha</h1>
                                </div>

                                <h2 class="mb-4">Software developer & SEO expert</h2>
                                <p class="mb-4"><a class="custom-btn btn custom-link" href="#section_2">Download My CV</a></p>
                            </div>
                        </div>

                        <div class="col-lg-5 col-12 position-relative">
                            <div class="hero-image-wrap"></div>
                            <img src={image2} class="hero-image img-fluid" alt="" height="100px"/>
                        </div>

                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#535da1" fill-opacity="1" d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </section>


            <section class="about section-padding" id="section_2">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                             
                            <div class="profile-thumb">
                                <div class="profile-title">
                                    <h4 class="mb-0">Information</h4>
                                </div>

                                <div class="profile-body">
                                    <p>
                                        <span class="profile-small-title">Name</span> 
                                        <span>Pasan Piyumantha</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Birthday</span> 
                                        <span>Feb 21, 1998</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Phone</span> 
                                         <span><a href="tel: 305-240-9671">+94 71622 8274</a></span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Email</span> 
                                        <span><a href="mailto:hello@josh.design">hello@pasanpiyumantha.me</a></span>
                                    </p>
                                </div>
                            </div>
                       
                        </div>

                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div class="about-thumb">

                                <div class="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 class="text-white me-4 mb-0">The Road So Far</h2>

                                    <img src="images/happy-bearded-young-man.jpg" class="avatar-image img-fluid" alt=""/>
                                </div>

                                <h3 class="pt-2 mb-3">a little bit about Pasan</h3>

                                <p>This one-page HTML portfolio is provided by <a href="https://templatemo.com" target="_blank">TemplateMo</a>. This layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go to <a href="https://unsplash.com" target="_blank">Unsplash</a> and <a href="https://freepik.com" target="_blank">FreePik</a> for images used in this page.</p>

                                <p>You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please <a href="https://templatemo.com/contact" target="_blank">contact us</a> for more info.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            </main>

            </>

)

}

export default Home