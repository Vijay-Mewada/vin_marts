import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='flex'>

        <div className='m-auto my-6 border-gray-300 border rounded-lg p-6'>
            <Typography variant='h5' className='my-4'>Login to your Account</Typography>
          <TextField required
          id="outlined-required"
          className='w-96'
          label="Email Id/Mobile number"
          type="text"
          size='small'
          /><br/><br/>
          <TextField required
          id="outlined-required"
          className='w-96'
          type="password"
          label="Password"
          size='small'
          /><br/><br/>
          <Button size='small' className='bg-blue-975 text-white m-auto hover:bg-blue-950 p-3 px-16 font-bold w-full'>Login</Button>


        <hr className='w-full bg-blue-975 my-4 '/>
        <Typography variant='body'>Create an account ? <Link href="/Register"><span className="text-blue-975 cursor-pointer ">Register</span></Link> </Typography>
        </div>
    </div>
  )
}

export default Login