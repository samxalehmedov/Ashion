import React from 'react'
import ReactPlayer from 'react-player'

const VideoSection = () => {
  return (
    <div className='lg:container mx-auto w-full md:h-screen h-[500px] lg:mt-[200px] md:mt-[150px] mt-[60px] lg:mb-[170px] md:mb-[120px] mb-[90px]'>
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=4TKtptoR2Oo"}
        controls={true}
        width={"100%"}
        height={"100%"}
      />
    </div>
  )
}

export default VideoSection