"use client"
import { usePathname } from "next/navigation";
import teddy from "../assets/teddy-profile.png";
import "../styles/nav.scss"
import Link from "next/link";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";
export default function Nav() {
    const pages = [
        {
        
          name: "Home",
          link: "/"
        },
        {
    
        name: "About",
        link: "/about"
      },
      {
        name: "Research",
        link: "/research"
      },
      {
        name: "Projects",
        link: "/projects"
      
    
      },
      // {
      //   name: "ThroughMyEyes",
      //   link: "/throughmyeyes"
      
    
      // }
    ]
    const pathname = usePathname()
    
    const [open,setOpen] = useState(null)
    return (
        <nav>
        <div className="logo">
          <img src={teddy.src} alt="" />
          <div className="name">
            <label htmlFor="">
              Teddy Oweh
            </label>
            <span>
              Software Engineer (ML)
            </span>
          </div>
        </div>
        <div className="links">
          {
            pages.map((page,index) => {
                const clasx = page.link === pathname ? "active" : ""
              return (
                <Link href={page.link} 
                className={clasx}
                key={index}
                >
                  <label htmlFor="">
                    {page.name}
                  </label>
                </Link>
              )
              })
          }
          
          </div>
          <div className="right-stuff">

      
          <div className="empty">
            <div className="green">

            </div>
            <div className="label">
                Somewhere training <span>DNN models.</span>
            </div>
          </div>
          <div className="menu-btn"
          onClick={()=>setOpen(true)}
          >
            <HambergerMenu size={18} color="#555"/>
          </div>
          </div>
          {
                open!=null&&
          
            <div className={open==true?"menubox nav-in":"menubox nav-out"}>
                <div className="cancel-div">
                <div className="logo">
          <img src={teddy.src} alt="" />
          <div className="name">
            <label htmlFor="">
              Teddy Oweh
            </label>
            <span>
              Software Engineer (ML)
            </span>
          </div>
        </div>
                    <a onClick={()=>setOpen(false)} className="cancel-icon">
                    <i class='bx bx-x'></i>
                    </a>

                </div>
            <div className="nav-links">
              {
                pages.map((page,index) => {
                    const clasx =    pathname==page.link?"nav-link active":"nav-link"

                  return (
                    <div className={clasx}
                    key={index}
                    >
  <Link href={page.link}>
                        <label for="">{
                          page.name
                        }</label>
                    </Link>
                    </div>
                  )
                })
              }
             
             
        
                

            </div>
            </div>
              }
      </nav>
    )
}