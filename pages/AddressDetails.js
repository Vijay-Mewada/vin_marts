/* eslint-disable @next/next/no-img-element */
import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AddressDetails = () => {

  const theme = createTheme({

    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {color:"red"},
        },
      },
    },
  
  })

  return (
    <ThemeProvider theme={theme}>
    <div>
        <Grid container className='bg-blue-975'>
            <Grid lg={4} xl={4}>
                <img src='/images/logo.webp' alt='logo' className='p-2 w-16 h-16'/>
            </Grid>
            <Grid lg={4} xl={4} >
                <div className='flex h-full'>
                <Typography variant='h6' className='m-auto text-white font-semibold content-center'>Checkout</Typography>
                </div>
            </Grid>
            <Grid lg={4} xl={4}>
                
            </Grid>

        </Grid>

        <div className='flex'>

<div className='m-auto my-6 border-gray-300 border rounded-lg p-6'>

    <Typography variant='h5' className='my-4'>Add a Delivery Address</Typography>
<TextField required
  id="outlined-required"
  className='w-96'
  label="Full Name"
  type="text"
  size='small'
  /><br/><br/>
  <TextField required
  id="outlined-required"
  className='w-96'
  label="Street Address"
  type="text"
  size='small'
  /><br/><br/>
  <TextField required
  id="outlined-required"
  className='w-96'
  label="City"
  type="text"
  size='small'
  /><br/><br/>
  <TextField required
  id="outlined-required"
  className='w-96'
  label="State"
  type="text"
  size='small'
  /><br/><br/>
  <TextField required
  id="outlined-required"
  className='w-96'
  label="Zip Code"
  type="text"
  size='small'
  /><br/><br/>
  <TextField required
  id="outlined-required"
  className='w-96'
  label="Mobile Number"
  size='small'
  /><br/><br/>
  <TextField required
  id="outlined-required"
  className='w-96'
  label="Email"
  type="email"
  size='small'
  /><br/><br/>
 
  <Button size='small' className='bg-blue-975 text-white m-auto hover:bg-blue-950 p-3 px-16 font-bold w-full'>Save Address</Button>


<hr className='w-full my-4'/>
{/* <Typography variant='body'>Already have an account ? <Link href="/Login" passHref><span className="text-blue-975 cursor-pointer ">Login</span></Link> </Typography> */}
</div>
</div>

    </div>
    </ThemeProvider>
  )
}

export default AddressDetails