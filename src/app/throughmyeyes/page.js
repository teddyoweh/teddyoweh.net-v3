import Image from "next/image";
import teddy from "../assets/ife.png";
import "../styles/nav.scss"
import Link from "next/link";
import "../globals.css"

import "../styles/gallery.scss"
import teddyimg from '../assets/oweh.jpeg'

import Nav from "../components/Nav";

export default function About() {
  

  return (
    <div className="app">
      <Nav/>
      <div className="body">
        <div className="top">
            <div className="name">
               Moments / Memories / Life.
            </div>
            {/* <div className="bio">
                CS + Math Major <span className="hg">
 <a href="https://www.morgan.edu/" target="_blank"> Morgan State University <span>↗</span></a></span>
            </div> */}
        </div>
        <div className="gallery"></div>
      
      </div>
    </div>
  );
}
