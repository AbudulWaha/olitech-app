
import { Link} from "react-router-dom"
import "./Player.css"
export const SmallCard = ({get}) => {
  const {id, poster, head_name}=get
  
  return (
    
    <div className='flex '>
      <Link to={`/player/${id}`}>
        <div className="max-w-xs" >
          <img className='small' src={poster} alt='' />
        </div>
      </Link>
      <Link to={`/player/${id}`}>
        <div className="text-xl ml-3">
          {head_name}
        </div>
      </Link>
      
    </div>
  )
}


