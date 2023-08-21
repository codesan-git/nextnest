import React, { ImgHTMLAttributes } from 'react'
import Image from 'next/image'
import { Result } from '@web/app/types';

export default function Pokemon({name, imageUrl}:Result) {
  return (
    <div className=''>
        <div className='flex flex-row cursor-pointer shadow-lg bg-white border-r-4  gap-4 items-center p-2 rounded'>
            <div className='rounded-full w-[4.5rem] h-[4.5rem]'>
                <Image src={imageUrl} alt='profileImg' width={200} height={200} priority={false} className='rounded-full object-cover' />
            </div>
        <div><span>{name}</span></div>
        </div>
    </div>
  )
}