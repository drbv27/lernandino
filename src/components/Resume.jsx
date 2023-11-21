const Resume = () => {
  return (
    <div className='text-white'>
      <h1 className="text-4xl text-center font-semibold">Resume</h1>
      <div className='ml-8'>
        <a href="MyCV.pdf" /* download */target='_blank'>Download the pdf</a>
        <h2 className="text-3xl font-semibold">Front end Proeficiencies</h2>
        <ul>
          <li className='list'>HTML</li>
          <li className='list'>CSS</li>
          <li className='list'>JavaScript</li>
          <li className='list'>jQuery</li>
          <li className='list'>React</li>
          <li className='list'>Bootstrap</li>
        </ul>
        <h2 className="text-3xl font-semibold">Back end Proeficiencies</h2>
        <ul>
          <li className='list'>APIs</li>
          <li className='list'>Node</li>
          <li className='list'>Express</li>
          <li className='list'>MySQL, Sequelize</li>
          <li className='list'>MongoDB, Mongoose</li>
          <li className='list'>REST</li>
          <li className='list'>GraphQL</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume