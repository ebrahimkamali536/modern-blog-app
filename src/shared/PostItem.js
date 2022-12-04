import { ClockIcon } from '@heroicons/react/24/solid';
import React from 'react';

const PostItem = ({post}) => {
    console.log(post)
    return (
        <div className='bg-white p-4 rounded-2xl shadow-md'>
            <div>
                <img />
            </div>
            <div>
                <h2>{post.title}</h2>
                <div>
                    <span>{post.category.title}</span>
                    <div>
                        <img src="" />
                        <span>{post.author}</span>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-x-2'>
                        <ClockIcon className='w-4 h-4' />
                        <p className='text-sm'>زمان مطالعه: <span>{post.readingTime}</span></p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;