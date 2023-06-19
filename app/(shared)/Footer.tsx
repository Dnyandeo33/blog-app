import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-wh-900 w-full py-10 px-10 text-wh-50'>
      <div className=' justify-between mx-auto gap-16 sm:flex'>
        <div className=' mt-16 basis-1/2 sm:mt-0'>
          <h4 className=' font-bold'>Blog Of The Future</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum magnam maiores itaque architecto temporibus, distinctio libero iusto, aperiam laboriosam ipsum tempore eaque ea quae illum, deleniti sit quod vitae?</p>
          <p>©All Rights Reserve </p>
        </div>
        <div className=' mt-16 basis-1/4 sm:mt-0'>
          <h4 className=' font-bold'>Links</h4>
          <p className='my-5'>magnam maiores itaque architecto temporibus, </p>
          <p className='my-5'>distinctio libero iusto, </p>
          <p className='my-5'>consectetur adipisicing elit.</p>
        </div>
        <div className=' mt-16 basis-1/4 sm:mt-0'>
          <h4 className=' font-bold'>Contact us</h4>
          <p className='my-5'>deleniti sit quod vitae?</p>
          <p className='my-5'>+32 491567865</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
