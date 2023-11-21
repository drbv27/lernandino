import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex gap-4 mt-4 justify-center text-white'>
        <a href="https://github.com/"><FaGithub className='text-4xl hover:text-slate-300'/></a>
        <a href="https://www.linkedin.com/"><FaLinkedin className='text-4xl hover:text-slate-300'/></a>
    </div>
  )
}

export default Footer