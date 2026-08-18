import Skillbar from "./Skillbar.jsx"
function Skillcard(props){
  return(
    <>
    <div className=" mt-5 rounded-2xl p-3 md:px-7 skil flex justify-center flex-col items-center relative container animcard">
      <h1 className="web text-xl font-bold font-serif ">{props.type}</h1>
    <Skillbar skill="REACT" perce="75" skills="react" />
    <Skillbar skill="CSS" perce="80" skills="css"/>
    <Skillbar skill="HTML" perce="85" skills="js"/>
     <Skillbar skill="EXPRESS_JS" perce="85" skills="js" />
      <Skillbar skill="MONGODB" perce="75" skills="react" />
    </div>
    
    </>
  )
}
export default Skillcard     