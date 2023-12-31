import { Post } from '@prisma/client'
import React from 'react'
import Card from './Card'

type Props = {
    otherPosts: Array<Post>
}

const Other = ({ otherPosts }: Props) => {
    return (
        <section className='pt-4 mb-16'>
            <hr className='border-1 shadow-sm shadow-black' />
            <div className=' flex items-center gap-3 my-8'>
                <p className='font-bold text-2xl'>Other Trending Posts</p>
            </div>
            <div className='sm:grid grid-cols-2 gap-12'>
                <Card className='mt-5 sm:mt-0'
                    imageHight="h-80"
                    post={otherPosts[0]} />
                <Card className=' mt-5 sm:mt-0'
                    imageHight="h-80"
                    post={otherPosts[1]} />
                <Card className=' mt-5 sm:mt-0'
                    imageHight="h-80"
                    post={otherPosts[2]} />
                <Card className=' mt-5 sm:mt-0'
                    imageHight="h-80"
                    post={otherPosts[3]} />
            </div>
        </section>
    )
}

export default Other