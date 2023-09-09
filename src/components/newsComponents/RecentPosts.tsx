import React from 'react'

import { getRecentPosts } from '@/util/newsUtil/getRecentPosts'
import { GetRecentPostsProps } from '../../../types/getRecentPostsProps'
import { RecentPostsProps } from '../../../types/recentPost';

import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

export async function RecentPosts () {
  const recentPosts:GetRecentPostsProps = await getRecentPosts();

  return (
    <>
      <div className='
        bg-white p-4 rounded-2xl
      '>
        <h2 className='text-2xl font-bold hover:decoration-1 hover:underline'>
          <Link href='/news/page/1'>
            Recent Posts
          </Link>
        </h2>
          {
            recentPosts.postsConnection.edges.map((recentPost:RecentPostsProps, idx:number) => (
              <div key={idx} className='flex px-4 my-8'>
                <Image 
                  src={recentPost.node.featuredImage.url}
                  width={50}
                  height={50}
                  alt='featured Image'
                  className='mr-4 object-scale-down rounded-full'
                />
                <div>
                  <span className='block'>{moment(recentPost.node.updatedAt).format('MMM DD, YYYY')}</span>
                  <Link href={`/news/post/${recentPost.node.slug}`} className='block'>
                    {recentPost.node.title}
                  </Link>
                </div>
              </div>
            ))
          }
      </div>
    </>
  )
}
