import React from 'react'
import styles  from './Timeline.module.css'
import { Timeline } from '@/const/Career_Timeline'
import Link from 'next/link'

const page = () => {
  return (
    <div className='mb-12'>
        <h2 className='mt-24 text-center font-bold text-4xl'>Career</h2>
        <hr className="w-24 h-1 mx-auto mt-4 mb-20 bg-teal-200 border-0 rounded"></hr>
        <div className='
            flex flex-col mx-8
            sm:mx-20
            md:mx-40
            xl:mx-20 xl:flex-row xl:space-x-12 xl:justify-between
        '>
            <div className='
                mb-20
                xl:w-1/2
            '>
                <h2 className='
                    text-center text-2xl font-bold mb-6 
                    xl:text-left
                '>
                    My Career
                </h2>
                <p>
                    Hi, my name is Yusuke and I am a{" "}
                    <span className="font-bold">{"highly ambitious"}</span>,
                    <span className="font-bold">{" self-motivated"}</span>, and
                    <span className="font-bold">{" driven"}</span> software engineer
                    based in Shibuya Tokyo.
                </p>
                <br />
                <p>
                I graduated from Osaka Prefecture University in 2019 and completed my Master&#39;s degree at Osaka University in 2021, 
                specializing in studying the physical properties of substances using various experimental equipments. 
                </p>
                <br />
                <p>
                    Currently, I&#39;m a dedicated member of Tactinc Company, where I specialize in RPA development.
                </p>
                <br />
                <p>
                    Alongside my work, I am passionate about programming and I&#39;m actively studying various languages like Ruby on Rails, Next.js, TypeScript, and more. 
                    I&#39;m excited to utilize my programming skills to contribute to the growth and success of your business!🙂
                </p>
            </div>
        
            <div className={`
                ${styles.cp_timeline02} 
                xl:w-1/2
                `}>
                {
                    Timeline.map((item) => (
                        <>
                            <h2>{item.year}</h2>
                            <ul>
                                {
                                    item.contents.map((content) => (
                                        <li className='text-black' key={content.title}>
                                            <Link href={content.url} target="_blank">
                                                <p className={styles.flag}>{content.title}</p>
                                            </Link>
                                            <p className={styles.desc}>{content.description}</p>
                                            <p className={styles.time}>{content.date}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default page