import { FaLink, FaGithub } from "react-icons/fa"

const Portfolio = () => {
  return (
    <div className="text-white">
        <h1 className="text-4xl text-center font-semibold">Portfolio</h1>
        <div className='flex flex-col md:flex-row md:flex-wrap mx-4'>
            <div className='w-1/2'>
                <div className="image_wrapper">
                    <img src="site1.jpg" alt="" className='p-4'/>
                    <div className="overlay overlay_4">
                        <p className="flex justify-center gap-4">
                            <a href="">
                                <FaLink className='text-2xl'/>
                            </a>
                            <a href="">
                                <FaGithub className='text-2xl'/>
                            </a>
                        </p>
                    </div>
                </div>

            </div>
            <div className='w-1/2'>
                <div className="image_wrapper">
                    <img src="site2.jpg" alt="" className='p-4'/>
                    <div className="overlay overlay_4">
                        <p className="flex justify-center gap-4">
                            <a href="">
                                <FaLink className='text-2xl'/>
                            </a>
                            <a href="">
                                <FaGithub className='text-2xl'/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className="image_wrapper">
                    <img src="site3.jpg" alt="" className='p-4'/>
                    <div className="overlay overlay_4">
                        <p className="flex justify-center gap-4">
                            <a href="">
                                <FaLink className='text-2xl'/>
                            </a>
                            <a href="">
                                <FaGithub className='text-2xl'/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className="image_wrapper">
                    <img src="site4.jpg" alt="" className='p-4'/>
                    <div className="overlay overlay_4">
                        <p className="flex justify-center gap-4">
                            <a href="">
                                <FaLink className='text-2xl'/>
                            </a>
                            <a href="">
                                <FaGithub className='text-2xl'/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className="image_wrapper">
                    <img src="site5.jpg" alt="" className='p-4'/>
                    <div className="overlay overlay_4">
                        <p className="flex justify-center gap-4">
                            <a href="">
                                <FaLink className='text-2xl'/>
                            </a>
                            <a href="">
                                <FaGithub className='text-2xl'/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className="image_wrapper">
                    <img src="site6.jpg" alt="" className='p-4'/>
                    <div className="overlay overlay_4">
                        <p className="flex justify-center gap-4">
                            <a href="">
                                <FaLink className='text-2xl'/>
                            </a>
                            <a href="">
                                <FaGithub className='text-2xl'/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio