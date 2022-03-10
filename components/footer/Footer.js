import { Grid } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#0096FF" }}>
      <Grid item container>
        <Grid lg={4}>
          <h1 className='text-center text-white text-3xl font-bold'>Vin Marts</h1>
          <p className='text-white mx-4 text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </Grid>
        <Grid lg={4}>
        <h1 className='text-center text-white text-3xl font-bold'>Social Links</h1>
        <div className='flex my-2'>
          <div className='m-auto flex'><FacebookIcon /><p>&nbsp;Facebook</p></div>
        </div>

        <div className='flex my-2'>
        <div className='m-auto flex'><InstagramIcon /><p>Instagram</p></div>
        </div>
        
        <div className='flex my-2'>
        <div className='m-auto flex'><TwitterIcon /><p>Twitter</p></div>
        </div>

        </Grid>
        <Grid lg={4}>

        <h1 className='text-center text-white text-3xl font-bold'>About</h1>
        <div className='flex'>
          <div className='m-auto'>
          <Link href='/'>Contact us</Link><br/>
        <Link href='/'>About us</Link>
          </div>
        </div>


        </Grid>
      </Grid>
    </div>
  )
}

export default Footer