import hero from '../../assets/hero.png'

function Card(props){
  return(
    <>
    <div className="w-full bg-red-500 mt-5 rounded-2xl card flex flex-col gap-3 animcard">
       <div className=" w-full   rounded-2xl flex py-5 flex-col justify-center items-center">
            <img src={props.img} alt=""  className='w-full rounded-lg h-[200px]'/>
       </div>
       <div className="prcontent font-mono mt-3">
        {props.content}
       </div>
       <a href={props.link} className='p-3 card-btn w-1/3 text-lg font-mono font-bold rounded-xl cursor-pointer'>view</a>
    </div>
    
    </>
  )
}
export default Card