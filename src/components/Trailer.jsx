import React from 'react'
import { useParams } from 'react-router-dom'

const Trailer = ({movie}) => {
    const params =  useParams()
    const wanted = movie.find(el=>el.id==params.id)
    console.log(wanted)
  return (
    <div>
         <h2>
        <iframe width="560" height="315" src={wanted.trailer} frameborder="0"></iframe>
        </h2>
        <h2 style={{color:'white'}}  >
            {wanted.description}
        </h2>
       
    </div>
  )
}

export default Trailer