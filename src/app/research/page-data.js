"use client"
import diseaseres from '../assets/disease1.jpeg'
import hfsres from '../assets/hfs.jpeg'
import nasares from '../assets/nasares.jpeg'
import nasacoding from '../assets/nasacoding.jpeg'
import nasaset from '../assets/nasaset.jpeg'
import nasaconf from '../assets/nasaconf.jpeg'
import nasateam from '../assets/nasateam.jpeg'
import hfsp from '../assets/hfssra.jpeg'
import hfsteddy from '../assets/hfsteddy.jpeg'
import nasaaward from '../assets/nasaaward.jpeg'
import nasares1 from '../assets/nasalogo.png'
import navyai from '../assets/navyai.png'
import navymsr from '../assets/navymarkup.jpeg'
const researches = [
    {
        title:'Dynamic Systems Modeling of Disease Propagation: Stochastic Network Processes with Differential Equation and Network Graph Theory',
        desc:'Leveraged stochastic processes on networks using differential equations to determine disease susceptibility rates and recovery probabilities, employing sophisticated mathematical and epidemiological models for better analysis and modelling of infectious diseases spread.',
        long_desc:'Leveraged stochastic processes on networks using differential equations to determine disease susceptibility rates and recovery probabilities, employing sophisticated mathematical and epidemiological models for better analysis and modelling of infectious diseases spread.',
        slug:'stochastic-processes',
        img:diseaseres
    },
    {
        title:'Mini-Batch R-Index (MBRI):  Spectral Decomposition algorithm for Fine-Tuning Machine Learning Model Optimizations & Multicollinearity handling in ML Models.',
        desc:'Developed a Spectral Decomposition-based algorithm integrating filter-wrapper techniques with feature clustering, utilizing the Rand Index cluster metric for enhanced selection precision. Employing multi-processing and parallel programming for high performance computational efficiency, rendering it ideal for real-world predictive models.',
        long_desc:'Developed a Hybrid Feature Selection Algoirthm to improve the performance of machine learning model. Combination of filter-wrapper techniques with feature clustering using a key <b>cluster quality metric -  Rand Index</b> to achieve optimal feature selection while maintaining computational efficiency. Further reduced time complexity and improving computational effiency by employing multi-processing and parallel programming methods. Making more practical for real-world predictive modelling.',

        slug:'hybrid-mbri',
        img:hfsres,
        gallery:
        <div className='research-gallery'>
        <img src={hfsres.src} className='full1' alt="" />
        <div className='row'>
        <img src={hfsp.src} className='box3' alt="" />
        <img src={hfsteddy.src} className='box4' alt="" />

        </div>
        </div>
    },
    {
        title:"Radio Frequency-Enabled Camera System (Image Manipulation + Rendering) for Launch Vehicle",
        desc:"Developed payload system for an automated radio frequency-enabled camera aboard a NASA USLI launch vehicle (sub-scale rocket, operating at an altitude of 6000 fts. Using demodulated telecommand signals from  a SDR Receiver, the system efficiently executes image processing techniques with custom functions. A microcontroller, equipped with custom GPIO pin drivers, serves as the central processing unit, seamlessly integrating hardware components. The resulting camera system effectively utilizes radio frequency capabilities to trigger image processing algorithms, functioning reliably even at altitudes of 6,000 feet. Implementation involves signal demodulation within a UDP server architecture for streamlined data transmission and complex image processing operations in response to SDR receiver commands.",
        long_desc:"A state-of-the-art payload system was designed for a rocket launched at an estimated speed of 4,600 feet per second. The purpose of this system is to execute a range of image processing techniques, all controlled by commands received from a Software-Defined Radio (SDR) Receiver. Custom functions were developed to efficiently parse these commands. The heart of this system is a Raspberry Pi microcontroller, which serves as the main processing unit. The result is an advanced camera system that seamlessly integrates radio frequency capabilities to capture and process images during the rocket's mission.",
        slug:'payload-system',
        img:nasares1,
        img1:nasacoding,
        img2:nasares,
        img3:nasaset,
        img4:nasaconf,
        img5:nasateam,
        gallery:
        <div className='research-gallery'>
        <img src={nasacoding.src} className='full' alt="" />
        <div className='row'>
            <img src={nasares.src} className='box' alt="" />
            <img src={nasaset.src} className='box1' alt="" />

        </div>
        
        <div className='row'>
            <img src={nasaaward.src} className='box1' alt="" />
            <img src={nasaconf.src} className='box' alt="" />

        </div>
    </div>
        
    },
    {
        title:'Integrating Markov Chains and Naïve Bayesian Classification for Rapid Weapon Pairing in Naval Warfare - NSWCDD AI & ML Innovation',
        desc:'Developed algorithms for automated scheduling and coordination of advanced weapon systems in naval warfare by integrating Markov Chains and Naïve Bayesian Classification. The methods involve using a Markov chain to track variables and predict future states, and employing supervised learning and statistical classification to classify data and optimize weapon pairings.',
        long_desc:'Developed algorithms for automated scheduling and coordination of advanced weapon systems in naval warfare by integrating Markov Chains and Naïve Bayesian Classification. The methods involve using a Markov chain to track variables and predict future states, and employing supervised learning and statistical classification to classify data and optimize weapon pairings.',
        img:navyai,
        slug:'nswcdd-ai',
        img1:navymsr,
        gallery:
        <div className='research-gallery'>
        <img src={navymsr.src} className='full' alt="" />
        <p>Rough Machine Learning Pipeline Ideation</p>
        </div>


    }

]


export {researches}