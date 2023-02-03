import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'react-scroll';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from './sk logo.png';
import Card1 from './card1.jpeg';
import Card2 from './card2.jpeg';
import Card3 from './card3.png';
import Card4 from './card4.jpeg';
import Card5 from './card5.jpeg';
import Card6 from './card6.jpeg';
import Card7 from './card7.jpeg';
import Card8 from './card8.jpeg';
import Slogo from './search.jpg';

export default function List(){
    return(
        <>
        
        <div className='container-fluid mt-2'>
                <Navbar expand="md">
                    <Container>
                        <Navbar.Brand href="#home" className='txt1mnbr'><img className='sklogo' src={Logo}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className='navbar-nav navbar12'>

                                <li className='nav-item active'>
                                        <Link spy={true} smooth={true} duration={1000} to='home' className='m-3'>Home</Link>
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
                        <div className=' col-lg-12 but'>

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

                                <input type='search' placeholder='Search Skils & Resorces' className='form-control mt-5 col-lg-12 inputlist'/>
                                {/* <img src={Slogo} className='searchlogo1'/> */}

                                <div class="dropdown show fil1">

                                    <a class="btn btn-light dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Filter
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Software Developer</a>
                                        <a class="dropdown-item" href="#">Web Developer</a>
                                        <a class="dropdown-item" href="#">Android Developer</a>
                                    </div>
                                </div>

                            </div>
                        </div> 
                </div>

                <div className='col-lg-12 row'>
                    <div className='col-lg-2 ml-5'>
                            <div>
                                <div class="dropdown show mt-5 ">
                                    <a class="btn btn-light dropdown-toggle" href="#"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categorys
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Software Developers</a>
                                        <a class="dropdown-item" href="#">Web Developers</a>
                                        <a class="dropdown-item" href="#">Mobile Application Developer</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="dropdown show mt-4">
                                    <a class="btn btn-light dropdown-toggle" href="#"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Experience
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">2 years</a>
                                        <a class="dropdown-item" href="#">Fresher</a>
                                        <a class="dropdown-item" href="#">5 years</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="dropdown show mt-4">
                                    <a class="btn btn-light dropdown-toggle" href="#"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Skills
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Front end Developer</a>
                                        <a class="dropdown-item" href="#">Back end Developer</a>
                                        <a class="dropdown-item" href="#">Java Developer</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="dropdown show mt-4">
                                    <a class="btn btn-light dropdown-toggle" href="#"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Loaction
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Tamil Nadu</a>
                                        <a class="dropdown-item" href="#">Kerala</a>
                                        <a class="dropdown-item" href="#">Banglore</a>
                                    </div>
                                </div>
                            </div>
                    </div>    
                        
                        <div className='col-lg-2 mt-5'>
                            <div className="card text-center">
                                <Link to='/profile1'>
                                    <img src={Card1} class="card-img-top mamlist"/>
                                </Link>
                                <div class="card-body">
                                    <h5 class="card-title">Sabaree</h5>
                                    <p class="card-text">Software Developer</p>
                                    <p class="card-text">Banglore,Karnataka</p>
                                    
                                </div>
                            </div>
                        </div>

                        

                         <div className='col-lg-2 mt-5'>
                             <div className="card text-center ml-4">
                             <Link to='/profile2'>
                                    <img src={Card5} class="card-img-top mamlist"/>
                                </Link>
                                 <div class="card-body">
                                     <h5 class="card-title">Divya</h5>
                                     <p class="card-text">Web Developer</p>
                                     <p class="card-text">Hydrabad,Telangana</p>
                                 </div>
                             </div> 
                         </div>

                         <div className='col-lg-2 mt-5'>
                             <div className="card text-center ml-4">
                             <Link to='/profile3'>
                                    <img src={Card2} class="card-img-top mamlist"/>
                                </Link>
                                 <div class="card-body">
                                     <h5 class="card-title">Vignesh Kumar</h5>
                                     <p class="card-text">Full Stack Developer</p>
                                    <p class="card-text">Banglore,Karnataka</p>
                                 </div>
                             </div>
                         </div>
                        <div className='col-lg-2 mt-5'>
                            <div className="card text-center ml-4">
                            <Link to='/profile4'>
                                    <img src={Card6} class="card-img-top mamlist"/>
                                </Link>
                                 <div class="card-body">
                                     <h5 class="card-title">Varshini</h5>
                                     <p class="card-text">Web Developer</p>
                                     <p class="card-text">Chennai,Tamil nadu</p>
                                 </div>
                             </div>
                         </div>
                    
                         <div className='col-lg-2 card2'>
                             <div className="card text-center ml-4">
                             <Link to='/profile5'>
                                    <img src={Card3} class="card-img-top mamlist"/>
                                </Link>
                                 <div class="card-body">
                                     <h5 class="card-title">Naveen Kumar</h5>
                                     <p class="card-text">Software Developer</p>
                                     <p class="card-text">Banglore,Karnataka</p>
                                 </div>
                             </div>
                         </div>

                         <div className='col-lg-2 mt-5'>
                             <div className="card text-center ml-5">
                             <Link to='/profile6'>
                                    <img src={Card7} class="card-img-top mamlist"/>
                                </Link>
                                 <div class="card-body">
                                     <h5 class="card-title">Navya</h5>
                                     <p class="card-text">Java Developer</p>
                                     <p class="card-text">krishnagiri,Tamil nadu</p>
                                 </div>
                             </div>
                         </div>

                         <div className='col-lg-2 mt-5'>
                             <div className="card text-center ml-5">
                             <Link to='/profile7'>
                                    <img src={Card4} class="card-img-top mamlist"/>
                                </Link>
                                 <div class="card-body">
                                     <h5 class="card-title">Nandha Kumar</h5>
                                     <p class="card-text">Web Developer</p>
                                     <p class="card-text">Kovai,Tamil nadu</p>
                                 </div>
                             </div>
                         </div>

                         <div className='col-lg-2 mt-5'>
                             <div className="card text-center ml-5">
                             <Link to='/profile8'>
                                    <img src={Card8} class="card-img-top mamlist"/>
                                </Link>
                                 <div class="card-body">
                                     <h5 class="card-title">Mamtha</h5>
                                     <p class="card-text">Full Stack Developer</p>
                                     <p class="card-text">Trissur,Kerala</p>
                                 </div>
                            </div>
                         </div>
                          
                </div>

        </>
    );
}