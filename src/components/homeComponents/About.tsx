import React from 'react'
import { About_MySkills } from '@/const/About_MySkills'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <h2 className='
        mt-36 text-center font-bold text-4xl
    '>About Me</h2>

    <hr className="w-24 h-1 mx-auto mt-4 mb-20 bg-teal-200 border-0 rounded"></hr>
    <div className='
        flex justify-center flex-col
        md:mx-12
        lg:mx-24
        xl:flex-row xl:items-start
    '>
        <div className='
            px-8 
            xl:w-1/2
        '>
            <h3 className='
                text-center text-2xl font-bold mb-6
            '>Get to know me!</h3>
            <p className='text-center'>
                Hi, my name is Yusuke and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> engineer
                based in Japan.
            </p>
            <br />
            <p className='text-center'>
                I graduated from Osaka University, 
                Toyonaka in 2021 with a physics, especially engaged in the investigation of organic superconductors, 
                and have been working in the field of engineering since.
            </p>
            <br />
            <p className='text-center'>
            I have a wide range of hobbies and passions that keep me busy. 
            From reading, playing sports, and traveling, and more, 
            I am always seeking new experiences and love to keep myself engaged and learning new things.
            </p>
            <br />
            <p className='text-center'>
                I believe that you should{" "}
            <span className="font-bold text-teal-500">
                never stop growing
            </span>{" "}
                and that&#39;s what I strive to do, I have a passion for
                technology and a desire to always push the limits of what is
                possible. I am excited to see where my career takes me and am
                always open to new opportunities. 🙂
            </p>
        </div>
        <div className='
            px-4 mt-20
            xl:w-1/2 xl:mt-0 
        '>
        <h3 className='
            text-center text-2xl font-bold mb-6
        '>My Skills</h3>
        <div className='
            flex flex-wrap flex-row justify-center
            xl:items-start    
        '>
            {
                About_MySkills.map((item) => {
                    return (
                        <p
                            key={item.skill}
                            className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                        >
                            {item.skill}
                        </p>
                    )})
            }
        </div>
        <Image 
            src='/Home_person.png'
            alt='hero image'
            width={300}
            height={300}
            className='hidden md:block md:relative md:bottom-4 mt-12 mx-auto'
        />
        </div>
    </div>
    </>
  )
}

export default About