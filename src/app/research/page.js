"use client"
import Image from "next/image";
import teddy from "../assets/ife.png";
import "../styles/nav.scss"
import Link from "next/link";
import "../globals.css"

import "../styles/research.scss"
import teddyimg from '../assets/oweh.jpeg'
import researchteam from '../assets/researchteam.jpeg'

import Nav from "../components/Nav";
import { researches } from "./page-data";
import { usePathname,useRouter } from 'next/navigation';
import Footer from "../components/Footer";

export default function About() {
    const router = useRouter();


  return (
    <div className="app">
      <Nav/>
      <div className="body slide-up">
        <div className="top">
            <div className="name">
                Research
            </div>
            <div className="bio">
                I'm very versatile when it comes to research - primary focus on Core ML, Reinforcement & Deep Learning Models - but I've used my technical prowess to solve problems in other fields like Quantum Computing, Data Science & Analysis, Aerospace + System Engineering and more.
            </div>
           
        </div>
      <div className="research-content">
      <div className="research-img">
                        <img width={400} height={400} src={researchteam.src}   alt='Teddy Oweh Research'/>
                        <label htmlFor="">
                            Tarleton Pers Research Symposium &apos;23 / <a target='_blank'href="https://www.tarleton.edu/president/about-dr-hurley-2/">Dr. James Hurley<span>↗</span></a>
                        </label>
                    </div>
      <div className="research-list">
                        {researches.map((research,index)=>{
                            return(
                                <>
                        
                                <div className="research-teddy">
                                <div className="research-teddy-content">
                                    <label htmlFor="">
                                   {research.title}
        
                                    </label>
                                    <p>
                                        {research.desc}
                                    </p>
                                </div>
                                <div className="research-teddy-img">
                                    <img src={research.img.src} alt="" />
                                    {/* <a  onClick={()=>router.push(`${pathname}/${research.slug}`)}>View   <span>↗</span></a> */}
                                </div>
        
                            </div>
                            {
                                index!=researches.length-1?<hr />:''
                            }
                            </>
                            )
                        })

                        }
                   
                 
                    </div>
      </div>
      
      </div>
      <Footer/>
    </div>
  );
}
