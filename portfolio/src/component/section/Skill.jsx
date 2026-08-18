import Skillcard from "../sets/Skillcard.jsx"
import Skilllang from "../sets/Skilllang.jsx"
import Skilltech from "../sets/Skilltech.jsx"
export default function Skill(){
    return (
        <>
    <div className='min-w-full min-h-screen relative flex justify-center flex-col pt-15' id='Skill'>
        <div className="w-full flex justify-center pt-6">
          <h1 className='text-3xl font-serif anim'>MY SKILLS</h1>
          </div>
      <div className=" w-full  relative  flex justify-center items-center  flex-col">
         <Skillcard type="WEB DEV"/>
          <Skilllang type="LANGUAGES" />
          <Skilltech type="OTHER TECHNOLOGY"/>
       </div>

        </div>
       
        </>
    )
}