import React from 'react'
import { LinkedIn ,FacebookRounded,GitHub} from '@mui/icons-material'
// import Linkedin from "../assets/linkedin.png"
const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/thapelo-chaba-444554224'
        target='_blank'
        rel='noreferrer'

        >
            <LinkedIn fontSize="large"/>
            {/* <img alt='linkedin' src={Linkedin}/> */}

        </a>
        {/* <a
        className='hover:opacity-50 transition duration-500'
        href='https://web.facebook.com/thapelo.chaba.35/'
        target='_blank'
        rel='noreferrer'

        >
            <FacebookRounded fontSize='large'/>
        </a> */}
        <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/Thapelo-git'
        target='_blank'
        rel='noreferrer'

        >
            <GitHub fontSize='large'/>
        </a>
    </div>
  )
}

export default SocialMediaIcons