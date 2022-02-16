import React from 'react';
import Image from 'next/image';
import Header from "../../components/Header";  
import Footer from "../../components/Footer";
import { NextSeo } from 'next-seo';
import tvshows from '../../tvshowsdata.json'
import NewIn from '../../components/NewIn';
import Filters from '../../components/Filters';


const data=tvshows.map((tvshow)=>{
    return(
        <a key={tvshow.id} href={'/tvshows/'+ tvshow.id} className='px-10 py-2'>
                <Image
                        src={tvshow.picturePath}
                        layout='fixed'
                        alt={tvshow.name}
                        width={135}
                        height={200}
                    />
            <div className="w-32 text-sm text-center py-2">{tvshow.name}</div>
                {/* <p className='pl-5 pb-10 text-sm text-center'>{tvshow.category}</p>    */}
            </a>
    )
})

export default function TvShows({tvshows}){
    return(
        <div className='bg-gray-100 w-screen h-screen flex-col '>
        <NextSeo title="TV Shows"/>
        <Header/>
        <div className="bg-gray-100 w-screen "><NewIn/></div>
        <div className='px-5 py-5 text-2xl bg-gray-100'>TV Shows:</div>
        <div className='flex px-5 md:hidden bg-gray-100'><div className='flex px-4 md:hidden w-24 h-8 text-center text-xl text-white bg-black'>Filters</div></div>
        <div className='flex flex-col md:flex-row grow w-screen justify-around bg-gray-100 pb-10'>
            <div className='hidden md:flex bg-gray-100 md:w-[300px] lg:w-[400px] pt-10 pl-5'><Filters/></div>
            
            <div className="flex  bg-gray-100 w-screen ">
                <div className='flex flex-col md:w-[550px] lg:w-[700px] xl:w-[1000px] 3xl:w-[1900px] items-center w-screen md:items-stretch md:flex-row md:justify-center md:top-0  flex-wrap pt-10'>
                    {data}
                </div>
            </div> 
        </div>  
        <Footer/>
    </div>
    )
}

