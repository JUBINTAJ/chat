import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function home() {

const nav=useNavigate()


  return (
    <div>


<div   className=' flex justify-center items-center'>
<Link to={'/Chat'}><button  className='border boder-3 w-36 h-10 '>Chat</button> </Link>
</div>
<div   className=' flex justify-center items-center'>
<Link to={"/Video"}><button className='border boder-3 w-36 h-10'  >  Video Call</button></Link>

</div>
    <div className=' flex justify-end items-center m-5' >  


<Link to={'/Login'} ><button className='border boder-3 w-36 h-10 '>
    
    LOGIN
    
    </button></Link>

    </div>
    </div>
  )
}

export default home