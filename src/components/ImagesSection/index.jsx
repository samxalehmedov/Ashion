import React from 'react'
import img1 from "../../assets/ImagesSection/gallery1.png"
import img2 from "../../assets/ImagesSection/gallery2.png"
import img3 from "../../assets/ImagesSection/gallery3.png"
import img4 from "../../assets/ImagesSection/gallery4.png"

const ImagesSection = () => {
  return (
    <div className='lg:container mx-auto w-full h-full lg:pt-[200px] md:pt-[150px] pt-[60px] lg:pb-[170px] md:pb-[120px] pb-[90px]'>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-[30px]'>
          <div className='w-full h-[690px] bg-black group overflow-hidden'>
            <img src={img1} alt="image" className='w-full h-full object-cover group-hover:scale-100 scale-105 ease-in-out duration-500 group-hover:opacity-70' />
          </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-[30px]'>
              <div className='w-full h-[690px] bg-black group overflow-hidden'>
                <img src={img2} alt="image" className='w-full h-full object-cover group-hover:scale-100 scale-105 ease-in-out duration-500 group-hover:opacity-70' />
              </div>
              <div className='flex flex-col gap-[30px]'>
                <div className='w-full h-[330px] bg-black group overflow-hidden'>
                  <img src={img3} alt="image" className='w-full h-full object-cover group-hover:scale-100 scale-105 ease-in-out duration-500 group-hover:opacity-70' />
                </div>
                <div className='w-full h-[330px] bg-black group overflow-hidden'>
                  <img src={img4} alt="image" className='w-full h-full object-cover group-hover:scale-100 scale-105 ease-in-out duration-500 group-hover:opacity-70' />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ImagesSection