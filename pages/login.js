import Header from "../components/Header";  
import Footer from "../components/Footer";
import { NextSeo } from 'next-seo';

export default function AboutUs(){
    return(
        <div className='bg-gray-100 w-screen h-screen flex-col '>
            <NextSeo title="Log In"/>
            <Header/>
            <div className="flex flex-col grow bg-gray-100 px-5 mt-10 pb-[475px] lg:pb-[600px]">
            <div className="flex flex-col items-center py-5 px-5 self-center w-56 md:w-[500px] h-56 md:h-80 md:py-20 bg-black">
                <div className='pb-5'><input className="md:w-64 pl-2" type='text' placeholder="Username/E-mail"/></div>
               <div className='pb-5'><input className="md:w-64 pl-2" type='text' placeholder="Passphrase"/></div> 
               <button className="p-4 bg-white md:w-24 md:h-20 w-20 h-16 hover:bg-gray-300 text-center">Log In</button>
               <div className="underline sm md:text-lg lg:text-xl text-white md:pt-10">Don’t have an account? Register here!</div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}