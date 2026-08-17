

export default function Skillbar(props){
const bar=`${props.skills} w-full mt-2 h-[10px] bg-gray-800 rounded-xl relative`
    return(
        <>
        <div className="container w-full h-15 m-3 outbar px-4 rounded-xl">
            <div className="flex justify-between">
            <h1 className="inbar md:text-xl text-20px font-bold font-serif">{props.skill}</h1>
            <p className="relative top-3 font-mono text-green-200">{props.perce}%</p>
            </div>

            <div className={bar}  id="bar1"></div>
        </div>
        </>
    )
}