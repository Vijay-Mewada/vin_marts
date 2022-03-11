import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const Category = () => {
    const [image, setImage] = useState('/images/HealthCare_Banner.jpg')
    const router = useRouter();
    if(router.pathname == "/d"){
        setImage('/images/BeautyCare_Banner.jpg')
    }
    return (
        <div>
            <Grid className="z-50 bg-white" container item style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat",height:'24rem', backgroundSize:'cover'}}>
               <Grid className='bg-white h-28 mx-4 rounded-b-lg' container item >
                <Grid lg={1}>

                </Grid>

                <Grid lg={1}>

                <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >personal care</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/personalcare.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>

                </Grid>

                <Grid lg={1}>
                    <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Beauty care</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/skincare.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Wellness</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/wellness.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Health care</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/healthcare.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >FMCG</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/fmgc.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Classical</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/classical1.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Promotional</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/promotional.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Agriculture</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/Agriculture.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Veterinary</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/Veterinary.png" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>
                     <div class="relative flex rounded-full m-2 p-1 border-blue-950 border-2 hover:cursor-pointer h-24 w-24 md:w-24 sm:w-24 xl:w-24 xl:h-24 lg:w-16 lg:h-16 ">
                        <a class="absolute inset-0 z-10 rounded-full bg-blue-975 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 class="tracking-wider text-white font-semibold text-sm" >Business Tools</h1>

                        </a>
                        <a href="#" class="relative m-auto">
                            <div class="h-22  w-22 flex flex-wrap content-center m-auto">
                                <img src="/images/businesstool.webp" class="m-auto rounded-full " alt="" />
                            </div>
                        </a>
                    </div>
                </Grid>

                <Grid lg={1}>

                </Grid>

                </Grid>
            </Grid>
            {/* <div className='relative'>
            <img className='absolute -mt-28  z-10' src='/images/BeautyCare_banner.jpg'/>
                </div> */}
        </div>
    )
}

export default Category