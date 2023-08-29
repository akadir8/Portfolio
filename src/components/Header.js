import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
export const Header = () => {
  return (
    <div className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20'>
      <div className='flex flex-row items-center' style={{opacity:1, transform:'none'}}>
        <a href="https://github.com/akadir8" className="w-10 h-10 mr-2 text-gray-500" style={{display:'inline-block', width:"50px", height:"50px", position:'relative', overflow:'hidden', verticalAlign:"middle"}}>
           <FaGithub size={35} />
        </a>
        <a href="https://www.linkedin.com/in/abdulkadir-bi%C3%A7ki-865a56249/" className='text-gray-500' style={{display:'inline-block', width:"50px", height:"50px", position:'relative', overflow:'hidden', verticalAlign:"middle"}}>
          <FaLinkedin size={35} />
        </a>
        <a href="https://twitter.com/akadirbck1" className='text-gray-500' style={{display:'inline-block', width:"50px", height:"50px", position:'relative', overflow:'hidden', verticalAlign:"middle"}}>
          <FaTwitter size={35} />
        </a>
      </div>
    </div>
  )
}
