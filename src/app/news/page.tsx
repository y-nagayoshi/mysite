import React from 'react'

import MainPosts from '@/components/newsComponents/MainPosts';
import { RecentPosts } from '@/components/newsComponents/RecentPosts';
import { Categories } from '@/components/newsComponents/Categories';

export default async function Page () {

  return (
    <>
     <div className='
      flex flex-col py-4 text-black
      sm:p-8
      lg:flex-row 
    '>
      <div className='
        mx-4 flex flex-col items-center
        lg:w-2/3 
      '>
        <MainPosts slug={1}/>
      </div>
      <div className='
        mx-4 mt-12
        lg:w-1/3 lg:px-4 lg:mt-0
      '>
        <div className='sticky top-4'>
          <RecentPosts/>
          <Categories/>
        </div>
      </div>
      
     </div>
    </>
  )
}