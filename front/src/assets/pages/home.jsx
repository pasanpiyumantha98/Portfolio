import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/magnific-popup.css"
import "../css/templatemo-first-portfolio-style.css"
import image1 from "../images/1.jpg"
import image2 from "../images/3.png"
import logo from "../images/logo4.png"
import NavBar from "../components/NavBar"
import image3 from "../images/project.jpg"
import leaf from "../images/leafintel.png"
import ghr from "../images/ghr.jpg"
import gta6 from "../images/gta6.jpg"
import araliya from "../images/araliya.jpg"
import axios from "axios"
import { useEffect, useState } from "react"
import PasanCV from "../files/PasanCV.pdf"


function Home(){

    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()

   
    useEffect(()=>{

    async function fetchName()
    {
        const response = await axios.get('http://localhost:9000/name')

        setName(response.data)
    }

    fetchName()

    })

   

    
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

                                <h2 class="mb-4">Software Developer & SEO Expert</h2>
                                <p class="mb-4"><a class="custom-btn btn custom-link" href={PasanCV}>Download My Resume</a></p>
                            </div>
                        </div>

                        <div class="col-lg-5 col-12 position-relative">
                            <div class="hero-image-wrap"></div>
                            <img src={image2} class="hero-image img-fluid" alt="Pasan Piyumantha" height="100px"/>
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
                                    <h4 class="mb-0">A little bit about Pasan</h4>
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
                                         <span>+94 71 622 8274</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Email</span> 
                                        <span>hello@pasanp.me</span>
                                    </p>
                                    <p>
                                        <span class="profile-small-title">Based in</span> 
                                        <span>Galle, Sri Lanka</span>
                                    </p>
                                     <p>
                                        <span class="profile-small-title">Github</span> 
                                        <span><a href="https://github.com/pasanpiyumantha98">@pasanpiyumantha98</a></span>
                                    </p>
                                </div>
                            </div>
                       
                        </div>

                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div class="about-thumb">

                                <div class="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 class="text-white me-4 mb-0">The Road So Far</h2>

                                </div>

                                <h3 class="pt-2 mb-3"></h3>

                                <p>
                                    Hi, I’m Pasan Piyumantha,  a passionate and curious software engineer with a strong foundation in full-stack development, AI, and problem-solving. I recently completed my degree in Software Engineering from NSBM Green University, affiliated with Plymouth University, UK.
 <br></br> <br></br>
Over the years, I’ve worked on a variety of impactful projects, from AI-powered tools like Leaf Intel, a tea leaf quality assessment platform, to dynamic web apps and mobile solutions. My experience spans React, Spring Boot, Node.js, Firebase, and machine learning with Python. I'm driven by a deep interest in building scalable, user-centric applications that solve real-world problems.
 <br></br> <br></br>
Beyond development, I enjoy learning new things, collaborating with diverse teams, and continuously improving myself both technically and creatively. I also have a strong interest in sustainability and the environment, and I'm excited about combining tech with purpose-driven goals in the future.
                               </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






            <section class="projects section-padding" id="section_4">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-md-8 col-12 ms-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                               
                               <h2 class="text-white ms-4 mb-0">🚀 Latest Projects</h2>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">Tea leaf quality assesing platform using ML</small>

                                    <h3 class="projects-title">Leaf Intel</h3>
                                </div>

                                <a href="https://leafintel.vercel.app/" class="popup-image">
                                    <img src={leaf} class="projects-image img-fluid" alt="" height="50px"></img>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">Travel Agent Web Application</small>

                                    <h3 class="projects-title">Araliya Vacations</h3>
                                </div>

                                <a href="http://araliyavacations.com/" class="popup-image">
                                    <img src={araliya} class="projects-image img-fluid" alt=""></img>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag">Gaming Mods Management Platform</small>

                                    <h3 class="projects-title">GTA 6 Modding</h3>
                                </div>

                                <a href="https://grandhighwayresort.lk/" class="popup-image">
                                    <img src={gta6} class="projects-image img-fluid" alt=""></img>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag"></small>
                                    <small class="projects-tag">Hotel Web Application</small>
                                    <h3 class="projects-title">Grand Highway Resort</h3>
                                </div>

                                <a href="https://gta6modding.com/" class="popup-image">
                                    <img src={ghr} class="projects-image img-fluid" alt=""></img>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

             <section class="services section-padding" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                               
                                <h2 class="text-white ms-4 mb-0">  Education</h2>
                            </div>

                            <div class="row pt-lg-5">
                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">School Education</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">School</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>Passed General Certificate of Education Exams; Ordinary Level Exam with 6 A passes, 3 B passes and Advanced Level with 1 A pass and 2 B passes.</p>

                                        <a  href="https://richmondcollege.lk/" class="custom-btn custom-border-btn btn mt-3">Richmond College, Galle</a>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-book-half"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb services-thumb-up">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">Bachelors's Degree</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">University</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>BSc Software Engineering (Second Class Upper Division), Programme Aggregate Final Mark: 66.78</p>

                                        <a href="https://www.plymouth.ac.uk/international/national-school-of-business-management" class="custom-btn custom-border-btn btn mt-3">University of Plymouth, UK</a>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-briefcase"></i>
                                        </div>
                                    </div>
                                </div>

                               

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact section-padding" id="section_5">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-6 col-md-8 col-12">
                                <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                
                                    <h2 class="text-white ms-4 mb-0">Wave Hello 👋</h2>
                                </div>
                            </div>

                            <div class="clearfix"></div>

                            <div class="col-lg-3 col-md-6 col-12 pe-lg-0">
                                <div class="contact-info contact-info-border-start d-flex flex-column">
                                    <strong class="site-footer-title d-block mb-3">Expertise</strong>

                                    <ul class="footer-menu">
                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Web Development</a></li>

                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">SEO</a></li>

                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Software Development</a></li>

                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Computer Vision</a></li>

                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Tech Talks</a></li>

                                      
                                    </ul>

                                    <strong class="site-footer-title d-block mt-4 mb-3">Reach Me</strong>

                                    <ul class="social-icon">
                                        <li class="social-icon-item"><a href="https://github.com/pasanpiyumantha98" class="social-icon-link bi-github"></a></li>

                                        <li class="social-icon-item"><a href="https://www.linkedin.com/in/pasan-piyumantha-13128b216/" class="social-icon-link bi-linkedin"></a></li>

                                        <li class="social-icon-item"><a href="https://www.instagram.com/_pasan.p/" class="social-icon-link bi-instagram"></a></li>

                                        <li class="social-icon-item"><a href="https://web.facebook.com/p.piyumantha/" class="social-icon-link bi-facebook"></a></li>
                                    </ul>

                                   
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 ps-lg-0">
                                <div class="contact-info d-flex flex-column">
                                    
                                    <strong class="site-footer-title d-block mt-4 mb-3">Email</strong>

                                    <p>
                                        <a href="mailto:hello@pasanp.me">
                                            hello@pasanp.me
                                        </a>
                                    </p>

                                    <strong class="site-footer-title d-block mt-4 mb-3">Call</strong>

                                    <p class="mb-0">
                                        <a href="tel: 120-240-9600">
                                            +94 71 622 8274
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                                <form action="#" method="get" class="custom-form contact-form" role="form">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="form-floating">
                                                <input type="text" name="name" id="name" class="form-control" placeholder="Name" required=""></input>
                                                
                                                <label for="floatingInput">Name</label>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-12"> 
                                            <div class="form-floating">
                                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email address" required=""></input>
                                                
                                                <label for="floatingInput">Email address</label>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-6">
                                            <div class="form-check form-check-inline">
                                                <input name="website" type="checkbox" class="form-check-input" id="inlineCheckbox1" value="1"></input>

                                                <label class="form-check-label" for="inlineCheckbox1">
                                                    <i class="bi-globe form-check-icon"></i>
                                                    <span class="form-check-label-text">Developments</span>
                                                </label>
                                          </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-6">
                                            <div class="form-check form-check-inline">
                                                <input name="branding" type="checkbox" class="form-check-input" id="inlineCheckbox2" value="1"></input>

                                                <label class="form-check-label" for="inlineCheckbox2">
                                                    <i class="bi-lightbulb form-check-icon"></i>
                                                    <span class="form-check-label-text">SEO</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-6">
                                            <div class="form-check form-check-inline">
                                                <input name="ecommerce" type="checkbox" class="form-check-input" id="inlineCheckbox3" value="1"></input>

                                                <label class="form-check-label" for="inlineCheckbox3">
                                                    <i class="bi-phone form-check-icon"></i>
                                                    <span class="form-check-label-text">Other</span>
                                                </label>
                                            </div>
                                        </div>

                                        

                                        <div class="col-lg-12 col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                                                
                                                <label for="floatingTextarea">What's up?</label>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-12 ms-auto">
                                            <button type="submit" class="form-control">Send</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
               
            </section>
            </main>

            </>

)

}

export default Home