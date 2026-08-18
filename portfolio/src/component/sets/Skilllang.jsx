import Skillbar from "./Skillbar.jsx"
function Skilllang(props){
  return(
    <>
    <div className=" mt-5 rounded-2xl p-3 md:px-7 skil flex justify-center flex-col items-center relative container animcard">
      <h1 className="web text-xl font-bold font-serif ">{props.type}</h1>
    <Skillbar skill="PYTHON" perce="80" skills="css" />
    <Skillbar skill="JAVA SCRIPT" perce="85" skills="js"/>
    <Skillbar skill="C++" perce="70" skills="py"/>
    </div>
    
    </>
  )
}
export default Skilllang     