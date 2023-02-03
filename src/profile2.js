import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap';
import 'react-router-dom';
import { Link } from 'react-router-dom';
import Pro from './profile.jpg';
import './App.css';
import card5 from './card5.jpeg';


export default function Profile2() {
    return(
        <>

            <div className='container-fluid'>

                        <p className='left'></p>
                        <img src={Pro} className='pro'/>
                        <img src={card5} className='card1'/>

                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h2 className='sab mt-4'>Divya</h2>
                                    <h5 className='text-warning sab1'>Web Developer</h5>
                                    <h5 className='text-secondary sab2'>Hydrabad,Telangana</h5>
                                    <h3 className='mt-5'>Basic Information</h3>
                               
                                    <div className='row'>
                                        <div>
                                            <h5 className='mt-3 ml-3 text-warning'>Age</h5>
                                            <h5 className='mt-3 ml-3 text-warning'>Date of Birth</h5>
                                            <h5 className='mt-3 ml-3 text-warning'>Marial Status</h5>
                                            <h5 className='mt-3 ml-3 text-warning'>Address</h5>
                                            <h5 className='mt-3 ml-3 text-warning'>Work Experience</h5>
                                        </div>
                                        <div>
                                            <h5 className='mt-3 ml-5'>23</h5>
                                            <h5 className='mt-3 ml-5'>02.01.1990</h5>
                                            <h5 className='mt-3 ml-5'>Un-Married</h5>
                                            <h5 className='mt-3 ml-5'>1/14,KKK,street,Hydrabad</h5>
                                            <h5 className='mt-3 ml-5'>Three years</h5>                           
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6'>

                                    <p>
                                        I would describe myself as open and honest person who don't
                                         believe in misleading other people.I am an extremely intuitive
                                         person
                                    </p>

                                    <h3 className='text-warning'>Education</h3>
                                    <ul>
                                        <li className='mt-4'>Grade: M.Sc Computer TechnologyGrade:M.Sc Computer
                                            Technology
                                        </li>
                                        <li className='mt-3'>Activities and societies: Playing outdoor gamesActivities
                                            and societies: Playing utdoor games.
                                        </li>
                                    </ul>

                                    <h3 className='text-warning mt-4'>Skills</h3>
                                    <ul>
                                        <li className='mt-4'>HTML</li>
                                        <li className='mt-3'>CSS</li>
                                        <li className='mt-3'>JavaScript</li>
                                        <li className='mt-3'>Java</li>
                                        <li className='mt-3'>PHP</li>
                                    </ul>

                                    <h3 className='text-warning mt-4'>Work Experience</h3>
                                    <p className='mt-4'>
                                        I would describe myself as open and honest person who don't
                                         believe in misleading other people.I am an extremely intuitive
                                         person
                                    </p>


                                </div>
                            </div>
                        </div>
                    
                </div>
            
        </>

    );
}