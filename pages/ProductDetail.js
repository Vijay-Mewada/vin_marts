import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

const ProductDetail = () => {
  return (
    <div>
        <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        width: 256,
        height:192,
        // isFluidWidth: true,
        src: "/images/strach.png",
        sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
    },
    largeImage: {
        src: "/images/strach.png",
        width: 1200,
        height: 1800
    }
}} />
    </div>
  )
}

export default ProductDetail