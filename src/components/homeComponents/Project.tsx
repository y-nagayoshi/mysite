import React from 'react'
import Link from 'next/link'
import { FeaturedProjects } from '@/const/FeaturedProject'

import Image from 'next/image'

const Project = () => {
  return (
    <>
    <h2 className='mt-48 text-center font-bold text-4xl'>Featured Project</h2>
    <hr className="w-24 h-1 mx-auto mt-4 mb-20 bg-teal-200 border-0 rounded"></hr>

    <div className="flex flex-col space-y-28">
        {FeaturedProjects.map((project) => {
        return (
            <div key={project.name} className='
            flex flex-col
            lg:flex-row  lg:space-x-8 lg:items-start
            '>
                <div className='
                    h-64 relative
                    md:h-96
                    lg:w-1/2
                '>
                    <Image
                        src={project.image}
                        alt='cms blog image'
                        fill
                        className='
                            object-scale-down px-8 
                            sm:object-cover
                            md:object-scale-down
                        '
                    />
                </div>
                <div className='lg:w-1/2 mt-12 relative'>
                    <h2 className='font-bold text-3xl mb-4 text-center lg:text-left'>{project.name}</h2>
                    <p className='mb-4 text-center lg:text-left'>{project.description}</p>
                    <div className='flex space-x-8 justify-center lg:justify-start '>
                        <Link href={project.github} target="_blank">
                            <Image 
                                width={30}
                                height={30}
                                alt='github icon'
                                src='/LanguageIcon/github.svg'
                            />
                        </Link>
                        <Link href={project.link} target="_blank">
                            <Image 
                                width={30}
                                height={30}
                                alt='link icon'
                                src='/LanguageIcon/link.png'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )
        })}
        
    </div>
    </>
  )
}

export default Project