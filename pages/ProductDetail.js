import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

const ProductDetail = () => {
  return (
    <div className='flex'>
      <img src='/images/strach.png' className='w-12 h-12 border-2 m-2 border-black'/>
        <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        width: 666,
        height:500,
        // isFluidWidth: true,
        src: "/images/aloverajuice.webp",
        sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
    },
    largeImage: {
        src: "/images/aloverajuice.webp",
        width: 800,
        height: 1800
    }
}} />


    </div>
  )
}

export default ProductDetail