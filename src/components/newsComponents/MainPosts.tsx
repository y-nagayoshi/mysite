import React from 'react'

import { getPosts } from '@/util/newsUtil/getPosts';
import { postProps } from '../../../types/postProps';
import { getPostsProps } from '../../../types/getPostsProps';
import Pagenation from './Pagenation';

import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

export default async function MainPosts ({slug, category}: {slug: number, category?:string}) {
  const pageNum = !isNaN(slug) ? slug : 1;
  const posts:getPostsProps = category !== '' ? await getPosts(pageNum, category) : await getPosts(pageNum);

  return (
    <>
      <div>
        <div>
          {posts.postsConnection.edges.map((post:postProps) => (
            <div key={post.node.slug} className='bg-white rounded-3xl p-4 flex flex-col justify-center items-center mb-8'>
            <div className='
              relative h-40 w-full mx-auto
              sm:h-60
              lg:h-80
            '>
              <Image
                src={post.node.featuredImage.url}
                fill
                alt='featured Image'
                className=' object-center object-contain  rounded-3xl'
              />
            </div>

            <h2 className='text-center text-2xl font-bold py-4'>{post.node.title}</h2>

            <div className='
              flex flex-col  w-2/3 items-center
              md:flex-row md:justify-around
            '>
              <div className='
                flex w-fit items-center mb-4
                md:mb-0'>
                <Image 
                  src={post.node.author.image.url}
                  alt='author image'
                  width={30}
                  height={30}
                  className='mx-4 object-contain'
                  />
                  <div>{post.node.author.name}</div>
              </div>

              <div className='flex w-fit'>
                <Image 
                  src="https://media.graphassets.com/lk334HZQri3xXpwO8U8H"
                  alt='calender image'
                  width={30}
                  height={30}
                  className='mx-4 object-contain'
                  />
                  <div className='
                    flex flex-row justify-center
                    2xl:flex-col
                  '>
                    {post.node.updatedAt != post.node.createdAt ?
                      <span className='hidden 2xl:block'>UPDATE：{moment(post.node.createdAt).format('MMM DD, YYYY')}</span>
                      :
                      ''
                    }
                    <span className='block 2xl:hidden'>{moment(post.node.createdAt).format('MMM DD, YYYY')}</span>
                    <span className='hidden 2xl:block'>POST：{moment(post.node.createdAt).format('MMM DD, YYYY')}</span>
                  </div>
              </div>
            </div>

            <div className='
              line-clamp-3 mx-6 mt-4 
              lg:mt-10
            '>
              {post.node.excerpt}
            </div>

              <button className='my-8'>
                <Link 
                  href={`/news/post/${post.node.slug}`}
                  className='px-16 py-4 bg-cyan-300 rounded-full
                    transform transition duration-500 
                    hover:bg-cyan-200 hover:text-slate-600
                  '>
                        Read More...
                </Link>
              </button>

          </div>
          ))}
        </div>
        <Pagenation 
          hasNextPage={posts.postsConnection.pageInfo.hasNextPage} 
          hasPreviousPage={posts.postsConnection.pageInfo.hasPreviousPage} 
          pageSize={process.env.POST_PER_PAGE}
          currentPage={pageNum}
          category={category}
        />
      </div>
      </>
  )
}
