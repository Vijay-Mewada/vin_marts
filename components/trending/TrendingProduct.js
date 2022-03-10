import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from '@mui/material';
import axios from 'axios'
// import products from '../../pages/api/product.json'

const TrendingProduct = () => {

  const [item, setItem] = useState('')
  const [isLoading, setLoading] = useState(true)
  const style = {
    minHeight: "350px",
    maxHeight: "350px",
    width: "auto",
    margin: "auto",
    padding: "25px"
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
          return <Grid lg={3} md={6} sm={12} className="px-2">


            <div className='flex'>

              <Card sx={{ maxWidth: 345, maxHeight: 500 }} className='m-auto my-2' style={{ border: "2px solid #0096FF", borderRadius: '10px' }}>
                <CardActionArea>
                  <CardMedia
                    style={style}
                    component="img"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent style={{ backgroundColor: "#0096FF" }}>
                    <Typography gutterBottom variant="h5" component="div" className="text-white font-semibold font-serif">
                      {product.title}
                      <p className='text-sm'>Quantity : {product.quantity}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='text-white'>
                      {product.description}
                    </Typography>
                    <p className='text-lg font-semibold text-white'>&#x20B9; {product.price}</p>
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