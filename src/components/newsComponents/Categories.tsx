import React from 'react'

import { getCategories } from '@/util/newsUtil/getCategories';
import { CategoryProps } from '../../../types/categoryProps';

import Link from 'next/link';

export async function Categories () {
  const categories = await getCategories();

  return (
    <>
      <div className='bg-white p-4 rounded-2xl my-8'>
        <h2 className='text-2xl font-bold'>
          Categories
        </h2>
          {
            categories.categoriesConnection.edges.map((category:CategoryProps, idx:number) => (
              <div key={idx} className='flex px-4 my-6'>
                <div>
                  <Link
                    href={{
                      pathname:'/news/page/1/',
                      query: {category: category.node.slug}
                  }}>
                    <span className='block'>{category.node.name}</span>
                  </Link>
                </div>
              </div>
            ))
          }
      </div>
    </>
  )
}
