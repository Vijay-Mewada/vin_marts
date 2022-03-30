import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from '@mui/material';
import axios from 'axios'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'
import Rating from '../rating/Rating';
// import products from '../../pages/api/product.json'

const TrendingProduct = () => {

  const [item, setItem] = useState('')
  const [fev, setFev] = useState("white")
  const [isLoading, setLoading] = useState(true)

  const notify = () => toast.success("Item is Added to cart");


  const style = {
    minHeight: "200px",
    maxHeight: "250px",
    width: "auto",
    margin: "auto",
    padding: "0px"
  };




  useEffect(async () => {
    // let res = await axios.get('https://fakestoreapi.com/products')
    let res = await axios.get('./product.json')
      .then(response => {
        setItem(response.data)
        console.log(item)
        setLoading(false);
        console.log(item)
      }).catch(err => console.log(err))
  }, [])


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div><ToastContainer  />
      <h1 className='my-2 text-2xl font-semibold ml-2'>Trending Skin Care</h1>

      <Grid container item>
        {item.products.map((product) => {
          return <Grid lg={3} md={4} sm={6} xs={12} xl={2} className="px-2 group">


            <div className='flex'>
             
              <Link href='/ProductDetail'>
                <Card sx={{ maxWidth: 345, maxHeight: 500, minHeight: 300 }} className='m-auto my-4 ' style={{ borderRadius: '25px' }}>
              <div className='w-16 h-16 -ml-2 -mt-3 shadow-xl bg-blue-950 absolute rounded-full flex  group-hover:animate-bounce duration-300 z-20'>
                <p className='m-auto text-white font-bold'>{product.discount}</p>
              </div>
                <div className="group relative cursor-pointer">
                  <div style={{ maxWidth: 345, maxHeight: 500, minHeight: 300 }} className="overlay absolute bg-blue-975 z-10 overflow-hidden w-0 h-full ease-in duration-300 group-hover:w-full">
                    <FavoriteIcon className='mr-2 text-3xl ml-auto flex mt-2 text-red-500'  />
                    {/* <div className="text text-white top-1/2 left-1/2 absolute -translate-x-1/2">Hello World</div> */}

                    <Typography gutterBottom variant="h6" component="div" className="text-white text-center font-semibold font-serif">
                      {product.title}
                    </Typography>
                    <Typography gutterBottom variant="body" component="div" className="text-white text-center font-semibold">
                      {product.category}
                    </Typography>

                    <Typography gutterBottom variant="body" component="div" className="text-white text-center p-1 text-ellipsis max-w-sm overflow-hidden" >
                      {product.description.length > 50 ? product.description.substring(0, 50) + "..." : product.description}
                    </Typography>


                    <div className='flex'>
                      <p className='text-lg font-semibold text-white ml-auto'>&#x20B9; {product.price}</p>&nbsp;
                      <p className='text-lg font-semibold text-white line-through mr-auto text-center'> &#x20B9; {product.mrp}</p>
                    </div>

                    <Rating value={product.rating} text={`${product.numreviews} reviews`} />
                    

                    <div className='flex'>
                      <Button className='m-auto mt-6 mb-2 border-white border-2 text-white rounded-3xl p-0 px-2 z-10' variant="outlined" onClick={notify}> Add to Cart &nbsp; <div className=' bg-white w-12 h-12 group-hover:animate-ping absolute m-auto flex rounded-full'></div><ShoppingCartCheckoutIcon className='text-white ml-auto flex' /></Button>
                    </div>

                    <div className='flex'>
                      {/* <Button className='m-auto mt-2 border-white border-2 text-white rounded-3xl p-0 px-2' variant="outlined"> Buy Now &nbsp;  <CheckIcon className='text-white ml-auto flex' /></Button> */}
                    </div>

                  </div>
                  <CardActionArea>

                    <CardMedia
                      style={style}
                      component="img"
                      image={product.coverimage}
                      alt="green iguana"
                    />
                    <Typography gutterBottom variant="h6" component="div" className="text-gray-500 text-center font-semibold font-serif">
                      {product.title}
                    </Typography>


                    {/* <CardContent style={{ backgroundColor: "#0096FF" }}>
                    <Typography gutterBottom variant="h6" component="div" className="text-white font-semibold font-serif">
                      {product.title}
                      <p className='text-sm'>Quantity : {product.quantity}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='text-white'>
                      {product.description}
                    </Typography>
                    <div className='flex'>
                      <p className='text-lg font-semibold text-white'>&#x20B9; {product.price}</p>&emsp;
                      <p className='text-lg font-semibold text-white line-through'> &#x20B9; {product.mrp}</p>
                      <div className='ml-auto'>
                        <ShoppingCartCheckoutIcon className='mr-2 text-white text-3xl' />
                        <Button className='bg-blue-950 text-white font-semibold'>Buy Now</Button>
                      </div>
                    </div>
                  </CardContent> */}
                  </CardActionArea>
                </div>
              </Card>
              </Link>

            </div>

          </Grid>
        })}



      </Grid>
    </div>
  )
}

export default TrendingProduct