import { Grid, Typography } from '@mui/material'
import React from 'react'

const AddressDetails = () => {
  return (
    <div>
        <Grid container>
            <Grid lg={4} xl={4}>
                <img src='/images/logo.webp' className='p-2 w-16 h-16'/>
            </Grid>
            <Grid lg={4} xl={4} >
                <div>
                <Typography variant='h6' className='text-center'>Checkout</Typography>
                </div>
            </Grid>
            <Grid lg={4} xl={4}>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default AddressDetails