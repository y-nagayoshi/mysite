import React from 'react'

import { getRecentPosts } from '@/util/newsUtil/getRecentPosts'
import { RecentPosts } from '@/components/newsComponents/RecentPosts';
import { Categories } from '@/components/newsComponents/Categories';

import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { getPostDetails } from '@/util/newsUtil/getPostDetails';
import { postDetailsProps } from '../../../../../types/postDetailsProps';
import { RichTextContent } from '@graphcms/rich-text-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default async function Page ({ params: { slug } }: {params: {slug: string}}) {
  const postDetails:postDetailsProps = await getPostDetails(slug);
  const content:RichTextContent = postDetails.post.content.raw;
  

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
      <div>
        <div>
            <div className='bg-white rounded-3xl p-4 flex flex-col justify-center items-center mb-8'>
              <div className='
                relative h-40 w-full mx-auto
                sm:h-60
                lg:h-80
                '>
                <Image
                  src={postDetails.post.featuredImage.url}
                  fill
                  alt='featured Image'
                  className='absolute object-center object-scale-down rounded-3xl'
                />
              </div>

            <h2 className='text-center text-2xl font-bold py-4'>{postDetails.post.title}</h2>

            <div className='
              flex flex-col  w-2/3 items-center
              md:flex-row md:justify-around
              '>
              <div className='
                flex w-fit items-center mb-4
                md:mb-0
              '>
                <Image 
                  src={postDetails.post.author.image.url}
                  alt='author image'
                  width={30}
                  height={30}
                  className='mx-4 object-contain'
                  />
                  <div>{postDetails.post.author.name}</div>
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
                    flex flex-col justify-center
                    lg:flex-row
                  '>
                    {postDetails.post.createdAt != postDetails.post.updatedAt ? 
                      <span className='hidden lg:block'>UPDATE：{moment(postDetails.post.updatedAt).format('MMM DD, YYYY')}</span>
                      :
                      ''
                    }
                    <span className='block lg:hidden'>{moment(postDetails.post.createdAt).format('MMM DD, YYYY')}</span>
                    <span className='hidden lg:block'>POST：{moment(postDetails.post.createdAt).format('MMM DD, YYYY')}</span>
                  </div>
              </div>
            </div>

            <div className='mx-6 mt-10'>
              <RichText 
                content={postDetails.post.content.raw}
                renderers={{
                  h1: ({ children }) => <h1 className='text-3xl mt-4 mb-1'>{children}</h1>,
                  h2: ({ children }) => <h2 className='text-3xl mt-4 mb-1'>{children}</h2>,
                  h3: ({ children }) => <h3 className='text-3xl mt-4 mb-1'>{children}</h3>,
                  h4: ({ children }) => <h4 className='text-3xl mt-4 mb-1'>{children}</h4>,
                  h5: ({ children }) => <h5 className='text-3xl mt-4 mb-1'>{children}</h5>,
                  h6: ({ children }) => <h6 className='text-3xl mt-4 mb-1'>{children}</h6>,
                  p: ({ children }) => <p className='mb-4 mt-4'>{children}</p>,
                  code: ({ children }) => <code className='bg-black text-white'>{children}</code>,
                  img: ({ src }) => <img className='mt-2 mb-12' src={src} alt='asset-img' loading='lazy' />
                }}
              />
            </div>


          </div>
        </div>
      
      </div>
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
