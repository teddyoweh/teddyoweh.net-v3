import Image from "next/image";
import teddy from "./assets/ife.png";
import "./styles/nav.scss"
import Link from "next/link";
import "./styles/landing.scss"

import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  

  return (
    <div className="app">
      <Nav/>
      <div className="body slide-up">
        <div className="hero">
          <div className="first">
            Pushing Machines to Brilliance.
          </div>
          <div className="second btmm">
          Research <span className="hg"> <a target="_blank" href="https://qsideinstitute.org/">@qside <span>↗</span></a></span> / <span className="hg"> <a target="_blank" href="https://minds-lab-msu.github.io/">@MINDS Lab <span>↗</span></a></span> (ML + Data).
Researcher @ Morgan State 
<span className="hg">
 <a href="https://p-neumann.github.io/quantum/" target="_blank"> Quantum Computing Lab <span>↗</span></a></span>
 . Prev. AI/ML Engineer Intern <span className="hg"> <a href="https://apple.com">@Apple <span>↗</span></a></span> (Core ML + Infra).
 Prev. Lead Research @ <span className="hg"> <a href="https://www.tarleton.edu/csee/research/" target="_blank"> Tarleton State MISR Lab (Machine Learning Intellligence Research Lab) <span>↗</span></a></span>.
          </div>
          <div className="second btmm">
            Software Engineer - Building ML Architectures + Models, Backend + Infrastructure Systems & Web + Mobile Apps (Light Work).
           </div>
           <div className="second">
             The only way to do great work is to love what you do.  
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
