import {Link} from 'react-router-dom'
import Card from '../sets/card.jsx'
import aptiq from '../../assets/aptiq.png'
import calsi from '../../assets/calsi.png'
import port from '../../assets/portfolio.png'
export default function Project(){
  const aptiqc="AptiQ is a web application that allows users to take quizzes on various topics. It provides a user-friendly interface for selecting quizzes, answering questions, and receiving immediate feedback on their performance. The application is designed to enhance learning and knowledge retention through interactive quizzes."
  const calsic="CALSI is a web application that allows users to perform basic arithmetic calculations. It provides a simple and intuitive interface for entering numbers and selecting mathematical operations such as addition, subtraction, multiplication, and division. The application is designed to help users quickly and accurately perform calculations without the need for a physical calculator."
  const portc="My portfolio website built with React and Tailwind CSS with gmail integration. It showcases my projects, skills, and experience as a web developer. easy to navigate and visually appealing, the website provides a comprehensive overview of my work and serves as a platform for potential clients or employers to learn more about me."
    return (
        <>
   
        <div className='block min-h-screen pt-15 py-7 w-full' id='Project'>
          <div className='w-full flex justify-center pt-5'>
            <h1 className='text-3xl font-serif'>PERSONAL PROJECT</h1>
          </div>
          <div className=' min-w-full grid relative grid-cols-1 md:grid-cols-2 justify-center gap-3  '>
            <div className='w-full p-10 flex justify-center items-center'>
                <Card img={aptiq} link="https://aptiq-quiz.onrender.com" content={aptiqc}/>
                </div>
               <div className='w-full p-10  flex justify-center items-center'>
                <Card img={calsi} link="https://abbas-pr.github.io/CALSI/" content={calsic}/>
                </div><div className='w-full p-10  flex justify-center items-center'>
                <Card img={port} content={portc} />
                </div>
                

          </div>
         
        </div>
       
        </>
    )
}