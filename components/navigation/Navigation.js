import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='w-full' style={{backgroundColor:'#5ebcff'}}>
      <div className='ml-2 py-1'>
      <Link href='/'><a  className='ml-2 text-sm font-semibold hover:font-bold'>Ayurveda</a></Link>
      <Link href='/'><a  className='ml-4 text-sm font-semibold hover:font-bold'>Ayurveda</a></Link>
      <Link href='/'><a  className='ml-4 text-sm font-semibold hover:font-bold'>Ayurveda</a></Link>
      <Link href='/'><a  className='ml-4 text-sm font-semibold hover:font-bold'>Ayurveda</a></Link>
      <Link href='/'><a  className='ml-4 text-sm font-semibold hover:font-bold'>Ayurveda</a></Link>
      <Link href='/'><a  className='ml-4 text-sm font-semibold hover:font-bold'>Ayurveda</a></Link>
      </div>
    </div>
  )
}

export default Navigation