import {Link} from 'react-scroll'
import Contact from './section/contact.jsx'
import Project from './section/Project.jsx'
import About from './section/About.jsx'
import Skill from './section/Skill.jsx'
export default function Navbar(){
    return (
        <>
    <nav className="bg-purple-800 text-white  flex justify-between items-center h-16 fixed w-full">
        <div className="relative left-1 md:left-7 font-bold px-2 text-xl">
          <p>PORTFOLIO</p>
        </div>
        <div>
            <ul className='relative right-1 md:right-4 flex justify-around items-center gap-2 md:gap-5'>

           <li className='cursor-pointer'><Link activeClass='active' spy={true} to="About" smooth={true} duration={500} className='font-bold p-1'>About</Link></li>
            <li className='cursor-pointer'><Link activeClass='active' spy={true} to="Project" smooth={true} duration={300} className='  font-bold p-1 rounded-xl  transision-3'>project</Link></li>
            <li className='cursor-pointer'><Link activeClass='active' spy={true} to="Skill" smooth={true} duration={300} className=' font-bold p-1 rounded-xl '>Skill</Link></li    >
            <li className='cursor-pointer'><Link activeClass='active' spy={true} to="Contact" smooth={true} duration={300} className=' font-bold p-1 rounded-xl '>contact</Link></li    >
            </ul>
        
           
        </div>
    </nav>
    <main className='w-full'>
        <About/>
      <Project/>
      <Skill/>
      <Contact/>
    </main>
        </>
    )
}