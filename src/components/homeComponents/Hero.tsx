import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='
      mt-12 flex flex-col justify-center items-center
      xl:flex-row
    '>
      <div className='
        w-60 h-60 relative
        xl:w-80 xl:h-80
      '>
        <Image
          src='/mainVisual.jpg'
          alt='main visual'
          className='rounded-full object-cover z-[-1]'
          fill
        >
        </Image>
      </div>
      <div className='mx-12 xl:pl-20 md:w-3/5 flex flex-col justify-center'>
        <h2 className='
          text-4xl text-center font-bold mt-6 
          md:text-6xl md:mt-12
          xl:mt-0
        '>Hi, I&#39;m Yusuke Nagayoshi!</h2>
        <p className="
          text-lg text-center mt-10 mb-6 
          md:text-2xl
          xl:mb-0
          ">
            I&#39;m a{" "}
            <span className="font-semibold text-green-500	">
            Engineer{" "}
            </span>
            based in Japan. Working towards creating software that
            makes life easier and more meaningful.
        </p>
      </div>
    </div>
  )
}

export default Hero