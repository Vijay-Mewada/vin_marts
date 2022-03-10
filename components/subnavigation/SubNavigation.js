import React from 'react'
import Link from 'next/link'
const SubNavigation = () => {
    return (
        <div className='border bg-gray-50 h-8 flex'>
            <Link href='/'><a className='text-xs ml-2 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Beauty & Skin Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Hair Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Jod Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Health Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Teeth Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Women's Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Men's Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Eye Care</a></Link>
            <Link href='/'><a className='text-xs ml-4 font-semibold items-center hover:text-orange-400 hover:border-b-2 hover:border-orange-400 flex '>Liver Care</a></Link>
        </div>
    )
}

export default SubNavigation