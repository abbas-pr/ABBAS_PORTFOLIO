import Skillbar from "./Skillbar.jsx"
function Skilltech(props){
  return(
    <>
    <div className=" mt-5 rounded-2xl p-3 md:px-7 skil flex justify-center flex-col items-center relative container animcard">
      <h1 className="web text-xl font-bold font-serif ">{props.type}</h1>
    <Skillbar skill="GIT" perce="75" skills="react" />
    <Skillbar skill="RENDER" perce="70" skills="py"/>
    <Skillbar skill="JWT" perce="85" skills="js"/>
    </div>
    
    </>
  )
}
export default Skilltech