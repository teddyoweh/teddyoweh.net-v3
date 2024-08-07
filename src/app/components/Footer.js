"use client"
export default function Footer(){
    return (    
        <footer>
            <div className="footer-header">
                <label htmlFor="">
                    Contact Me.
                </label>
            </div>
            <div className="footer-content">
                <p>
                    Reach out to me <a href="mailto:ifowe1@morgan.edu">ifowe1@morgan.edu <span>↗</span>,</a> 
                    <a href="mailto:teddyoweh@gmail.com">teddyoweh@gmail.com <span>↗</span></a>
                    

                </p>
                <div className="socials"  target="_blank">
                    {/* <a href="">
                        Resume
                        <span>↗</span>
                    </a> */}
                    <a href="https://www.github.com/teddyoweh" target="_blank">
                        GitHub
                        <span>↗</span>
                    </a>
                    <a href="https://www.linkedin.com/in/teddyoweh" target="_blank">
                        Linkedin
                        <span>↗</span>
                    </a>
                    <a href="https://twitter.com/tedddyoweh"  target="_blank">
                        Twitter
                        <span>↗</span>
                    </a>
            
               
                </div>
            </div>
        </footer>

    )
}
