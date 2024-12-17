import React, { useContext } from 'react';
import './Services.css';
import Doctor from '../../assets/Medical.png';
import Shopping from '../../assets/Shopping.png';
import Cruds from '../../assets/Product.png';
import Currency from '../../assets/Currency.png';
import Memory from '../../assets/Memory.png';
import Hangman from '../../assets/Team.png';
import Quiz from '../../assets/Online.png';
import Dashboard from '../../assets/Dashboard.png';
import World from '../../assets/World.png';
import Slider from 'react-slick';
import { themeContext } from './../../Context';

const Services = _ => {
     const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
     const settings = {
          dots: true,          
          infinite: true,
          arrows: false,
          autoplay:true,      
          autoplaySpeed: 2000,            
          slidesToShow: 3,     
          slidesToScroll: 1,  
          responsive: [
            {
              breakpoint: 1023,  
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,   
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
    return ( 
        <div className="services" id='services' style={{backgroundColor : darkMode ? 'black' : '#cfdbe5'}}>
          <h3 style={{color : darkMode ? 'white' : 'black'}}>Our <span>Services</span></h3>
            <Slider {...settings}>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Doctor} alt="Medical" />
                </div>
                <div className="info">
                <h2>Doctor</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>The project significantly enhances the patient experience by providing convenient remote medical services, 
                    such as video consultations, health tracking, medication management, appointment scheduling.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/doctor/">View Project</a></button> 
            </div>
           </div>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Shopping} alt="Shopping" />
                </div>
                <div className="info">
                <h2>Shopping Cart</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>A web application that allows users to easily manage products in their shopping cart, including adding,
                     modifying, and removing items. It provides a simple interface to display products..</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/ShoppingCart/">View Project</a></button>
            </div>
           </div>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Cruds} alt="Cruds" />
                </div>
                <div className="info">
                <h2>Curds</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>It is a web application or program that allows users to perform basic operations
                     on data: Create, Read, Update, and Delete.
                     The project features an easy-to-use interface for managing information.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/Cruds/">View Project</a></button>
            </div>
           </div>
            
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Currency} alt="Currency" />
                </div>
                <div className="info">
                <h2>Currency</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>A currency conversion project that allows users to instantly 
                    and accurately convert money between different currencies, with live exchange rates and trend analysis.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/Currency-Converter/">View Project</a></button> 
            </div>
           </div>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Memory} alt="Memory" />
                </div>
                <div className="info">
                <h2>Memory Game</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>A memory game is a stimulating game that improves focus and memory.
                     Players flip two cards at a time to match similar images or shapes,
                     requiring strategic thinking and memory skills.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/Memory-Game/">View Project</a></button>
            </div>
           </div>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Hangman} alt="Hangman" />
                </div>
                <div className="info">
                <h2>Hangman Game</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>Hangman is a word-guessing game where players guess missing letters.
                     Incorrect guesses result in drawing parts of a hangman,
                     and the game ends when the word is guessed or the drawing is complete.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/Hangman-Game/">View Project</a></button>
            </div>
           </div>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Dashboard} alt="Dashboard" />
                </div>
                <div className="info">
                <h2>Dashboard</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>A Dashboard site is a platform that displays data in an organized way, providing a summary of current
                     information or performance through tables, visual indicators.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/personal-dashboard/">View Project</a></button>
            </div>
           </div>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={World} alt="World" />
                </div>
                <div className="info">
                <h2>World</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>A personal website is an online platform that showcases your resume,
                skills, achievements, and previous work, along with contact information and social media links.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/Ahmed-World/">View Project</a></button>
            </div>
           </div>
           <div className="big-box">
           <div className="box">
                <div className="image">
                <img src={Quiz} alt="Quiz" />
                </div>
                <div className="info">
                <h2>Quiz</h2>
                <p style={{color : darkMode ? '#b2acac' : 'black'}}>Developed a dynamic quiz app using JavaScript, HTML,
                and CSS, where questions are loaded from a JSON file. Features include a timer,
                 score calculation, and more.</p>
                </div>
                <button className="s-btn button"><a target='_blank' href="https://ahmedyassermansour.github.io/Quiz-App/">View Project</a></button>
            </div>
           </div>
           </Slider>
        </div>
     );
}
 
export default Services;