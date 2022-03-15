import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Rating from '../components/rating/Rating';
import ReactImageZoom from 'react-image-zoom';
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router'
import Link from 'next/link';

const ProductDetail = () => {
const [isLoading, setLoading] = useState(true)
const [item, setItem] = useState('')
const {t} = useTranslation();
const router = useRouter();

const props = { height: 250, zoomWidth: 500,zoomLensStyle:'opacity: 0.7;background-color: green',zoomPosition:"right", img: "/images/strach.png", backgroundColor:"#fff"};

  useEffect(async () => {
    // let res = await axios.get('https://fakestoreapi.com/products')
    let res = await axios.get('./product.json')
      .then(response => {
        setItem(response.data)
        
        setLoading(false);
        console.log(item)
      }).catch(err => console.log(err))
  }, [])


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }


  return (
    
    <div>
      <Grid container item className='p-1'>
        <Grid lg={1} xl={1}>
          <img src="/images/strach.png" className='h-24 m-1 border-2 border-black hover:border-blue-975 hover:border-4'/>
          <img src="/images/strach.png" className='h-24 m-1 border-2 border-black hover:border-blue-975 hover:border-4'/>
          <img src="/images/strach.png" className='h-24 m-1 border-2 border-black hover:border-blue-975 hover:border-4'/>
          <img src="/images/strach.png" className='h-24 m-1 border-2 border-black hover:border-blue-975 hover:border-4'/>
          <img src="/images/strach.png" className='h-24 m-1 border-2 border-black hover:border-blue-975 hover:border-4'/>
        </Grid>

        <Grid lg={3} xl={3}>
        <ReactImageZoom {...props} style={{ backgroundColor:"#fff"}}/>
        </Grid>

        <Grid lg={8} xl={8}>
          
        <Typography gutterBottom variant="h3" component="div" className="text-gray-700 text-left font-sans mt-2">
                      {item.products[0].title}
                    </Typography>

                    <Rating value={item.products[0].rating} text={`${item.products[0].numreviews} reviews`} textAlign='left' />
                    
                    <Typography gutterBottom variant="h4" component="div" className="text-gray-700 text-left font-sans mt-2">
                    &#x20B9; {item.products[0].price}
                    <span className='text-red-500'> {item.products[0].discount} Off</span>
                    </Typography>

                    <Typography gutterBottom variant="h6" component="div" className="text-gray-700 font-semibold text-left font-sans mt-2">
                    M.R.P.:&nbsp;<span className="line-through">&#x20B9; {item.products[0].mrp}</span>
                    </Typography>


                    <Typography gutterBottom variant="h4" component="div" className="text-gray-700 text-left font-sans mt-4 border-b border-gray-300">
                    About the product
                    </Typography>
                   
                    <ul>
                    {item.products[0].Abouttheproduct.map((productmainpoint)=>{
                      return<li className='text-xl font-semibold'>{productmainpoint.productpoint}</li>
                    })}
                    </ul>

                    <Typography gutterBottom variant="h4" component="div" className="text-gray-700 text-left font-sans mt-4 border-b border-gray-300">
                    Product Details
                    </Typography>
                    {console.log(router)}
                    <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>

                    <Typography gutterBottom variant="h5" component="div" className="text-gray-800 px-4 py-2 font-sans mt-4 text-justify ">
                    {/* {item.products[0].fulldescription} */}
                    {t("ProductDetail:productdetail")}
                    </Typography>

                    

                    {/* <Typography gutterBottom variant="body" component="div" className="text-black text-left font-semibold">
                      {item.products[0].category}
                    </Typography> */}
        
        </Grid>

      </Grid>
      
    </div>
  )
}

export default ProductDetail