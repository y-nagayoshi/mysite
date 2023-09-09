'use client'

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Header_navItem } from '@/const/Header_navItem'

const Header = () => {
    const [humburger, setHumburger] = useState(false);
    const pathname = usePathname();

    return (
    <div className='py-5 shadow-lg shadow-slate-200 text-white bg-gradient-to-r from-cyan-500 to-blue-500 fixed w-screen z-10 top-0 left-0'>
        <div className='mx-16 flex justify-between items-center'>
            <h1 className='w-fit text-4xl font-bold'>Yusuke Nagayoshi</h1>
            <div className='md:flex w-fit hidden gap-x-8'>
                {Header_navItem.map((item, idx) => (
                    <Link 
                        href={item.link}
                        className={`
                            ${item.link == pathname ? 'border-white	' : 'border-transparent' } 
                            border-solid border-b-2 hover:border-white	
                            h-fit`} 
                        key={idx}
                    >{item.label}
                    </Link>
                ))}
            </div>            
            <div 
                className={`cursor-pointer md:invisible w-8 h-8 z-10 flex items-center md:hidden`}
                onClick={() => {setHumburger(!humburger)}}
                >
                    <div className='w-8 h-fit'>
                        <span className={`${humburger ? 'rotate-45 translate-y-2.5': ''} transition ease-in-out delay-150 top-0 w-8 h-0.5 bg-current block rounded-full`}></span>
                        <span className={`${humburger ? ' opacity-0' : 'opacity-100'} transition ease-in-out delay-150 my-2 w-8 h-0.5 bg-current block rounded-full`}></span>
                        <span className={`${humburger ? '-rotate-45 -translate-y-2.5': ''} transition ease-in-out delay-150 top-0 w-8 h-0.5 bg-current block rounded-full`}></span>
                    </div>
            </div>

            <div 
                className={
                    `${humburger ? 'bg-slate-300 opacity-100 z-[5] flex w-screen' : 'opacity-0 -z-10 w-0'} 
                    transition ease-in-out duration-300   h-screen top-0 left-0 overflow-auto md:invisible 
                     gap-y-7 fixed flex-col justify-center items-center`}
                >
                    {Header_navItem.map((item, idx) => (
                        <Link 
                            href={item.link} 
                            className={`
                                ${item.link == pathname ? 'border-white' : 'border-transparent' }
                                border-solid border-b-2 hover:border-white 
                            `} 
                            key={idx}
                            onClick={() => setHumburger(false)}
                        >{item.label}
                        </Link>
                    ))}
            </div>
        </div>

    </div>
    )
}

export default Header