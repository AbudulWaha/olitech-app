
import { Link, useNavigate } from "react-router-dom"
import "./Player.css"
import { useEffect } from "react"
export const SmallCard = ({tstat}) => {
  const {id, poster, head_name}=tstat
  const Navigate = useNavigate()
  
  return (
    
    <div className='flex  border w-96 mb-2'>
      <Link to="/tutorial">
        <div className=" overflow-hidden" >
          <img className='small' src={poster} alt='' />
        </div>
      </Link>
      <Link to="/tutorial">
        <div className="text-xl ml-3">
          {head_name}
        </div>
      </Link>
      
    </div>
  )
}


