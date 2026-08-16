import {Link} from 'react-router-dom'
import hero from '../../assets/hero.jpeg';

export default function About(){
    const linkedin="https://www.linkedin.com/in/mohamed-mokshith-abbas-a-1560a5345?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    return (
        <>
        <div>
    <div className=' pt-9 min-h-screen  grid grid-cols-1 md:grid-cols-2 strink gap- mx-4' id='About'>
        <div className='content space-y-5 text-xl flex flex-col justify-center items-center md:items-start text-center py-20 px-10 md:px-0 md:py-0  md:text-left'>
            <h1 className=''>hi,I'm <span className='names font-bold'> Mohamed Mokshith Abbas!</span>,a B.Tech-Information Technology student and aspiring MERN stack Developer 
                passionate about building modern ,responsive and user-friendly web applications <span className='text-indigo-400 font-bold text-2xl animate-pulse m-2 '>FULL-STACK Developer</span></h1>
                 <p>
                    I have developed projects involving quiz platforms,portfolio websites and and full-stack application.
                    I'm particularly interested in learning new technologies, solving programming problems, and exploring
                    be integrating into web applications.
                 </p>
                 <p>
                    <span className='goal font-bold font-serif'>MY GOAL:</span>Build useful digital products,keep learning and become a 
                    skilled Full-Stack Developer.                  </p>
                 <button className='p-2 hover:p-3 px-4 rounded-full w-[100px] text-white font-bold transition-2s animate-bounce'><a href={linkedin}>LinkedIN</a></button>
        </div>
         <div className=' flex justify-center items-center w-full relative p-5 '>
            
            <img src={hero} alt="" className=' w-[300px] h-[300px] md:w-2/3 md:h-3/4 md:absolute rounded-full img p-3 hover:p-1'/>
            
         </div>
        
        </div>
        </div>
     
       
        </>
    )
}