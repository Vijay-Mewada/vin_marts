import { Button, Input, TextField, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='flex'>

        <div className='m-auto my-6 border-gray-300 border rounded-lg p-6'>
            <Typography variant='h5' className='my-4'>Make a new account</Typography>
        <TextField required
          id="outlined-required"
          className='w-96'
          label="Name"
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
          <TextField required
          id="outlined-required"
          className='w-96'
          type="password"
          label="Password"
          size='small'
          helperText="Password mast have atleast 8 characters."
          /><br/><br/>
          <Button size='small' className='bg-blue-975 text-white m-auto hover:bg-blue-950 p-3 px-16 font-bold w-full'>Register</Button>


        <hr className='w-full bg-blue-975 my-4 '/>
        <Typography variant='body'>Already have an account ? <Link href="/Login"><span className="text-blue-975 cursor-pointer ">Login</span></Link> </Typography>
        </div>
    </div>
  )
}

export default Register