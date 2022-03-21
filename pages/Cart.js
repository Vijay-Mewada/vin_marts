import { Delete, Favorite } from '@mui/icons-material';
import { Grid, Typography, FormControl, Select, MenuItem, InputLabel, TextField, Button ,Paper  } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';

const Cart = () => {
    const [size, setSize] = useState('500');
    const [count, setCount] = useState(1)


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // ...theme.typography.body2,
        padding: theme.spacing(1),
      }));

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div className='bg-gray-100'>
            <Grid container spacing={4} className='my-4'>
                <Grid lg={8} xl={8} item  className='p-2 bg-white'>
                <Item>
                    <Typography variant='h4' className='mx-2'>
                        My Cart
                    </Typography>


                    <Grid container >
                        <div className='border-b-2 border-gray-400 my-4 w-full'></div>
                        <Grid lg={4} xl={4}>
                            <img src='/images/aloverajuice.webp' alt='alovera juice' className='w-64 h-64' />
                        </Grid>
                        <Grid lg={6} xl={6}>
                            <div className='my-4'>
                                <Typography variant='h4' className='font-medium'>BE FAIR Cream (Toptime)</Typography>
                                <Typography variant='subtitle1' className='text-gray-700 text-2xl'> Antimicrobial Face Cleanser For All Types Of Skin</Typography>
                            </div>


                            <FormControl className='my-2'>
                                <div className='flex'>
                                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={size}
                                        label="Age"
                                        className='font-semibold'
                                        onChange={handleSizeChange}
                                    >
                                        <MenuItem value={500}>500ML</MenuItem>
                                        <MenuItem value={1000}>1000ML</MenuItem>
                                    </Select>

                                    <div className='rounded-full bg-blue-975 text-white h-10 w-10 m-auto flex mx-4 hover:cursor-pointer' onClick={() => setCount(count - 1)}>
                                        <Typography variant='h6' className='m-auto font-semibold text-center text-3xl '>-</Typography>
                                    </div>


                                    <TextField
                                        id="demo-helper-text-aligned"
                                        className='w-20 text-center m-auto font-bold'
                                        label="Quantity"
                                        inputProps={{ style: { fontWeight: 900, textAlign: 'center' } }}
                                        focused
                                        value={count}
                                    />


                                    <div className='rounded-full bg-blue-975 text-white h-10 w-10 m-auto flex mx-2 hover:cursor-pointer' onClick={() => setCount(count + 1)}>
                                        <Typography variant='h6' className='m-auto font-semibold text-center text-3xl'>+</Typography>
                                    </div>


                                </div>
                            </FormControl><br /><br />

                            <Button className='bg-blue-975 text-white m-auto hover:bg-blue-950 p-3'><Delete />Remove</Button>

                            <Button className='bg-blue-975 text-white m-auto hover:bg-blue-950 p-3 mx-2'><Favorite /> &nbsp; Add To Wishlist</Button>

                        </Grid>
                        <Grid lg={2} xl={2}>
                            <Typography variant='h4' className='mt-4 font-medium text-center'>&#x20B9; 250</Typography>
                        </Grid>

                    </Grid>




                    <Grid container item >
                        <div className='border-b-2 border-gray-400 my-4 w-full'></div>
                        <Grid lg={4} xl={4}>
                            <img src='/images/aloverajuice.webp' alt='alovera juice' className='w-64 h-64' />
                        </Grid>
                        <Grid lg={6} xl={6}>
                            <div className='my-4'>
                                <Typography variant='h4' className='font-medium'>BE FAIR Cream (Toptime)</Typography>
                                <Typography variant='subtitle1' className='text-gray-700 text-2xl'> Antimicrobial Face Cleanser For All Types Of Skin</Typography>
                            </div>


                            <FormControl className='my-2'>
                                <div className='flex'>
                                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={size}
                                        label="Age"
                                        className='font-semibold'
                                        onChange={handleSizeChange}
                                    >
                                        <MenuItem value={500}>500ML</MenuItem>
                                        <MenuItem value={1000}>1000ML</MenuItem>
                                    </Select>

                                    <div className='rounded-full bg-blue-975 text-white h-10 w-10 m-auto flex mx-4 hover:cursor-pointer' onClick={() => setCount(count - 1)}>
                                        <Typography variant='h6' className='m-auto font-semibold text-center text-3xl '>-</Typography>
                                    </div>


                                    <TextField
                                        id="demo-helper-text-aligned"
                                        className='w-20 text-center m-auto font-bold'
                                        label="Quantity"
                                        inputProps={{ style: { fontWeight: 900, textAlign: 'center' } }}
                                        focused
                                        value={count}
                                    />


                                    <div className='rounded-full bg-blue-975 text-white h-10 w-10 m-auto flex mx-2 hover:cursor-pointer' onClick={() => setCount(count + 1)}>
                                        <Typography variant='h6' className='m-auto font-semibold text-center text-3xl'>+</Typography>
                                    </div>


                                </div>
                            </FormControl><br /><br />

                            <Button className='bg-blue-975 text-white m-auto hover:bg-blue-950 p-3'><Delete />Remove</Button>

                            <Button className='bg-blue-975 text-white m-auto hover:bg-blue-950 p-3 mx-2'><Favorite /> &nbsp; Add To Wishlist</Button>

                        </Grid>
                        <Grid lg={2} xl={2}>
                            <Typography variant='h4' className='mt-4 font-medium text-center'>&#x20B9; 250</Typography>
                        </Grid>
                        <div className='border-b-2 border-gray-400 my-4 w-full'></div>
                    </Grid>
</Item> 
                </Grid>
                <Grid lg={4} xl={4} item className='bg-white p-2'>

                <Item>
                    
                    <Typography variant='h4' className='mx-2'>
                    Price Details
                    </Typography>
                    <div className='border-b-2 border-gray-400 my-4 w-full'></div>
                    <Grid container>
                        <Grid xl={6} lg={6}>
                        <Typography variant='subtitle1' className='text-gray-700 text-2xl'>Price (2 Items)</Typography>
                        </Grid>
                        <Grid xl={6} lg={6}>
                        <Typography variant='subtitle1' className='text-gray-700 text-2xl'>&#x20B9; 500</Typography>
                        </Grid>
                    </Grid>
                

                    
</Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cart