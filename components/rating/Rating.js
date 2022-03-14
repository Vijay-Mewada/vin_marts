import React from 'react'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useRouter } from "next/router";

const Rating = ({ value, text, color, textAlign}) => {
    const router = useRouter();
  return (
    <div className='text-white' style={{textAlign}}>
        {[1, 2, 3, 4, 5].map((rate)=>{
           return <span> {value + 1 === rate + 0.5 ? <StarHalfIcon style={{color}} className='-m-1' /> : value >= rate ?  <StarIcon style={{color}} className='-m-1' /> : <StarBorderIcon style={{color}} className='-m-1' /> }</span>
        })}
        {router.pathname == "/ProductDetail" ? <span className="text-center font-semibold text-black" >&nbsp;{text && text}</span> : <span className="text-center font-semibold text-white" >&nbsp;{text && text}</span>}
        
    </div>
  )
}


Rating.defaultProps = {
    color:"#FFA41C",
    textAlign:"center"
}

export default Rating