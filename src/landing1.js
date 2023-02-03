import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'react-scroll';
import { Link } from 'react-router-dom';
import './App.css';
import img1 from './market.jpg';
import img2 from './doctor.jpg';
import img3 from './engineer.png';
import img4 from './teacher.jpg';
import img5 from './it-1.jpeg';
import img6 from './archi.jpg';
import Group from './group.jpeg';
import Key from './key.jpeg';
import Logo from './sk logo.png';
import Slogo from './search.jpg';

export default function Landing1() {
    return (
        <>
        <div>

            <div className='container-fluid mt-2'>
                <Navbar expand="md">
                    <Container>
                        <Navbar.Brand href="#home" className='txt1mnbr'><img className='sklogo' src={Logo}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            
                            <ul className='navbar-nav navbar12'>

                                <li className='nav-item active'>
                                    <Link to='/'>
                                        <Link spy={true} smooth={true} duration={1000} to='home' className='m-3'>Home</Link>
                                    </Link>    
                                </li>
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='education' className='m-3'>Category</Link>
                                </li>
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='skills' className='m-3'>Contact Us</Link>
                                </li>
                                        
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='certification' className='m-3'>About Us</Link>
                                </li>
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='contact' className='m-3'>Login</Link>
                                </li>
                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='contact' className='m-3'><button className='btn btn-warning'>Register</button></Link>
                                </li>
                                    
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


                <div className='container-fluid'>
                        <div className='but'>
                            <div className='row justify-content-center'>
                                <button className='ml-4 btn btn-light mt-4'>plumber</button>
                                <button className='ml-4 btn btn-light mt-4'>Scientist</button>
                                <button className='ml-4 btn btn-light mt-4'>Engineer</button>
                                <button className='ml-4 btn btn-light mt-4'>Doctor</button>
                                <button className='ml-4 btn btn-light mt-4'>Architecture</button>
                                <button className='ml-4 btn btn-light mt-4'>Photographer</button>
                                <button className='ml-4 btn btn-light mt-4'>Mechanic</button>
                                <button className='ml-4 btn btn-light mt-4'>Information Technology</button>
                                <button className='ml-4 btn btn-light mt-4'>Markating</button>
                                <button className='ml-4 btn btn-light mt-4'>Teachers</button>
                            </div>

                            <div className='text-center mt-5'>
                                <h3>You can select the talent you need and grade it</h3>
                                <h3>according to your needs</h3>
                                <h4 className='mt-4 skill'>Skills point it used to easy way to find skilled persons in the domain</h4>
                            </div>
                            <div className='search d-flex'>

                                <Link to="/list">
                                    <input type='search' placeholder='Search Skils & Resorces' className='form-control mt-5 inputland'/>
                                </Link>
                                    <img src={Slogo} className='searchlogo'/>
                                <div class="dropdown show">
                                    <a class="btn btn-light dropdown-toggle fil" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Filter  
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Software </a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>

                            </div>
                            
                        </div> 

                        <div className='row'>
                            <div>
                                <h2 className='mt-2 ml-3'>Trending Job Category</h2>
                                <div className='mark mt-5'>
                                    <img src={img1} className='market'/>
                                    <h5 className='ml-4'>Marketing</h5>
                                </div>
                            </div>

                            <div className='mt-5'>
                               
                                <img src={img2} className='market mt-5'/>
                                <h5 className='doc'>Doctor</h5>
                            </div>
                            <div className='mt-5'>
                              
                                <img src={img3} className='market mt-5 ml-5'/>
                                <h5 className='engi'>Engineering</h5>
                            </div>
                            <div className='mt-5'>
                                
                                <img src={img4} className='market mt-5 ml-5'/>
                                <h5 className='tea'>Teacher</h5>
                            </div>
                            <div className='mt-5'>
                                
                                <img src={img5} className='market mt-5 ml-5'/>
                                <h5 className='info'>Information Technology</h5>
                            </div>
                            <div className='mt-5'>
                                
                                <img src={img6} className='market mt-5 ml-5'/>
                                <h5 className='arc'>Architecture</h5>
                            </div>
                        </div>    


                        
                    <div className='text-center mt-4'>
                        <div class="card bg-dark text-white">
                            <img class="card-img op" src={Group} alt="Card image"/>
                            <div class="card-img-overlay">
                                <h3 class="card-title mt-5 text-light">Skill Point is all domain skills to</h3>
                                <h3 class="card-title text-light">discover in the world</h3>
                                <h5 class="card-text text-light mt-5">You can easy to seacrh and select the job skills</h5>
                                <p class="card-text text-light mt-5"> One of the points allocated to a player character, often when leveling up, to purchase abilities on their skill tree. (video games) A magic point. (video games) A renewable energy point that may be used alongside magic points, to separate magical and physical abilities.</p>
                                <h5 className='mt-5 ln'>learn more</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12 row'>
                        <div className='col-lg-6'>
                            <img className="key mt-3" src={Key}/>
                        </div>

                        <div className='col-lg-6'>
                            <h3 className='mt-4'>Key points & Features</h3>
                            <p className='mt-5'>Milliennials are enetring the workspace in droves.They are eager, they are enthuistetic , they enterprising and as most employers can tell you, they don't as a hwile , act the</p>
                        
                            <p className='mt-5'>Milliennials are enetring the workspace in droves.They are eager, they are enthuistetic , they enterprising and as most employers can tell you, they don't as a hwile , act the</p>
                            <button className='btn btn-warning'>Learn more</button>
                        </div>

                    </div>

                    <div className='mt-4'>
                        <div class="card bg-dark text-white">
                            <img class="card-img op" src={Key} alt="Card image"/>
                            <div class="card-img-overlay">
                                <h3 class="card-title mt-5 text-light">You can easy to register your application and add your skill</h3>
                                <h3 class="card-title text-light">set to get a best placement</h3>
                                <h5 class="card-text text-light mt-5"></h5>
                                <p class="card-text text-light mt-5"> Milliennials are enetring the workspace in droves.They are eager, they are enthuistetic ,</p>
                                <p>they enterprising and as most employers can tell you,</p>
                                <div className='row'>
                                    <p className='ml-3'>they don't as a hwile , act the</p>
                                    <button className='btn btn-warning ml-5'>Register Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='foot row'>
                        <div className='mt-5'>
                            <img className='sklogo ml-5' src={Logo}/>
                        </div>
                        <ul className='abo mt-5'>
                            <h6>ABOUT</h6>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Your Account</li>
                            <li>SiteMap Us</li>
                        </ul>

                        <ul className='abo1 mt-5'>
                            <h6>HELP</h6>
                            <li>FAQ</li>
                            <li>Terms & Conditions</li>
                            <li>Job Reports</li>
                            <li>Report</li>
                        </ul>

                        <ul className='abo1 mt-5'>
                            <h6>SOCIAL</h6>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            
                        </ul>

                        <div className='abo1 mt-5'>
                            <h6>ADDRESS</h6>
                            <p>2/28,RSS building,</p>
                            <p>RVK Street,pallipalayam,</p>
                            <p>Namakkal,638008,</p>
                            <p>Tamil nadu,india</p>
                            <p>phone number : 9874563210</p>
                        </div>

                    </div>

                </div>

        </div>
        </>
    );
}