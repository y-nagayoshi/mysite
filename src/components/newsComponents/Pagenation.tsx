import React from 'react'
import Link from 'next/link';


import { getNumOfPosts } from '@/util/newsUtil/getNumOfPosts';

type PagenationProps = {
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    pageSize: string | undefined,
    currentPage?: number
    category?: string
}

export default async function Pagenation (params:PagenationProps) {
    const currentPage = params.currentPage ? 1 : params.currentPage;
    const postsNum:any = typeof params.category === "string"  && params.category != '' ? await getNumOfPosts(params.category) : await getNumOfPosts();
    const pagenation:number = params.pageSize != undefined ? Math.ceil(postsNum.postsConnection.edges.length / parseInt(params.pageSize)) : 1;
    
    return (
    <>
    <div>
        {
        (function () {
            const list = [];
            for (let i = 1; i <= pagenation; i++) {
                if(typeof params.category === "string"  && params.category != '') {
                    list.push(
                        <Link 
                            className='w-fit h-fit relative' 
                            href={{
                                pathname: `/news/page/${i}`,
                                query: {category: params.category}
                            }}
                        >
                            <li className='mx-4 p-8 bg-white rounded-full w-6 h-6 flex items-center justify-center'>
                                {i}
                            </li>
        
                            {i == params.currentPage ? <div className='w-4 h-0.5 bg-gray-950 absolute top-2/3 left-1/2 -translate-x-1/2 rounded-full'></div> : ''}
                        </Link>
                        );
                    } else {
                    list.push(
                        <Link 
                            className='w-fit h-fit relative' 
                            href={{
                                pathname: `/news/page/${i}`,
                            }}
                        >
                            <li className='mx-4 p-8 bg-white rounded-full w-6 h-6 flex items-center justify-center'>
                                {i}
                            </li>
        
                            {i == params.currentPage ? <div className='w-4 h-0.5 bg-gray-950 absolute top-2/3 left-1/2 -translate-x-1/2 rounded-full'></div> : ''}
                        </Link>
                        );
                }
            }
            return <ul className='flex w-fit mx-auto'>{list}</ul>;
        }())
        }
    </div>
    </>
    )
}
