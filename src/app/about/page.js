import Image from "next/image";
import teddy from "../assets/ife.png";
import "../styles/nav.scss"
import Link from "next/link";
import "../globals.css"

import "../styles/about.scss"
import teddyimg from '../assets/oweh.jpeg'

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  

  return (
    <div className="app">
      <Nav/>
      <div className="body slide-up">
        <div className="top">
            <div className="name">
                Ifechukwudeni (Teddy) Oweh
            </div>
            <div className="bio">
                CS + Math Major @ <span className="hg">
 <a href="https://www.morgan.edu/" target="_blank"> Morgan State University <span>↗</span></a></span>
            </div>
        </div>
        <div className='about-content'>
                    <div className='about-img'>
                        <img src={teddyimg.src} alt='Teddy Oweh'/>
                        <label htmlFor="">
                            Apple HQ, Cupertino, California  / <a target='_blank'href="https://www.youtube.com/watch?v=FzcfZyEhOoI">Apple Park<span>↗</span></a>
                        </label>
                    </div>
                    <div className="about-teddy">
                        <p>
                            I am a software engineer with a background in computer science and mathematics. I am currently a undergraduate student at Morgan State University, pursuing a Bachelors degree in Computer Science with a focus on Artificial Intelligence and Deep Learning.
                             <br />
                             <br />
                             Currently, I mainly work with Core ML + Scalable Backend Systems (API/MicroServices/DB).
                             <br />
                             <br />
                             Another of many technical skillsets is Fullstack Development - (Web + Mobile - Native, ReactNatve & SwiftUI) - creating impressive (UI), Fast (Performance) and Scalable (Backend) applications, some even integrated with machine learning systems.
                             {/* I am also current leading a research team <a href="https://tarleton.edu">@Tarleton State - Machine Intelligence Security and Research Lab  <span>↗</span> </a>,
                             President of the <a href="">Tarleton Computer Society<span>↗</span></a>  */}
                             <br />
                             <br />
                             Big fan of opensource development, i have built several libraries, modules, packages & tools, in database, networking systems, algorithms, web-frameworks & machine learning/ai fields
                             all opensourced <a href="https://github.com/teddyoweh">Github - @teddyoweh<span>↗</span></a>

                             <br />
                             <br />
                             Die hard ping pong player and leetcode solver.


                         </p>
                         <Link href='research' className='viewbtn'>
                     
                  Research <span>↗ </span>
                         </Link>
                    </div>
          

                </div>
      
      </div>
      <Footer/>
    </div>
  );
}
