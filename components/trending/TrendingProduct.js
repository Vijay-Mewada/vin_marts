import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from '@mui/material';
import axios from 'axios'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import products from '../../pages/api/product.json'

const TrendingProduct = () => {

  const [item, setItem] = useState('')
  const [isLoading, setLoading] = useState(true)
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
    <div>
      <h1 className='my-2 text-2xl font-semibold ml-2'>Trending Skin Care</h1>

      <Grid container item>
        {item.products.map((product) => {
          return <Grid lg={3} md={6} sm={12} className="px-2 group">


            <div className='flex'>
              <div className='w-16 h-16 -ml-2 -mt-2 shadow-xl bg-blue-950 absolute rounded-full flex  group-hover:animate-bounce duration-300'>
                <p className='m-auto text-white font-bold'>{product.discount}</p>
              </div>
              <Card sx={{ maxWidth: 345, maxHeight: 500 }} className='m-auto my-4 ' style={{ border: "2px solid #0096FF", borderRadius: '10px' }}>
                <CardActionArea>
                  <CardMedia
                    style={style}
                    component="img"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent style={{ backgroundColor: "#0096FF" }}>
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
                  </CardContent>
                </CardActionArea>
              </Card>

            </div>

          </Grid>
        })}



      </Grid>
    </div>
  )
}

export default TrendingProduct