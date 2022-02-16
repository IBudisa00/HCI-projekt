import Header from "../components/Header";  
import Footer from "../components/Footer";
import { NextSeo } from 'next-seo';

export default function AboutUs(){
    return(
        <div className='bg-gray-100 w-screen h-screen flex-col '>
            <NextSeo title="About Us"/>
            <Header/>
            <div className="flex grow bg-gray-100">
                <div className="flex flex-col md:pt-5 pb-10 m-5 text-sm md:text-lg lg:text-xl bg-gray-100">
                    <div className='pb-10'> FAQ </div>
                    <div className="underline pb-5">Who are the critics?</div>
                    <div className="pb-10">We started this page exclusivly as a consumer-based movie and TV show review page because we always found that most of our opinions disagree with professional movie critics. We wanted to see just how many people actually liked or disliked movies and TV shows and their honest reviews. On our page anyone can be a critic.</div>
                    <div className="underline pb-5">How can I become a critic?</div>
                    <div className="pb-10">Anyone can become a critic on this page with a simple registration/log in systems. This enables you to leave comments and grades for each movie or TV show.</div>
                    <div className="underline pb-5">How often are the movies/TV shows updated?</div>
                    <div className="pb-10">We add movies and TV shows as soon as possible. </div>
                    <div className="underline pb-5">How often are the reviews for movies/TV shows updated?</div>
                    <div className="pb-10">We update reviews almost instantly after someone posts them.</div>
                    <div className="underline pb-5">Have any more questions?</div>
                    <div className="pb-10">If you have any more question please feel free to ask them using this form underneath and we will make sure to reply as soon as possible!</div>
                
                    <div className="flex flex-col w-[250px] self-center h-64 sm:w-[400px] md:w-[700px] xl:w-[1200px] bg-black py-3 px-5">
                        <div className="py-5 "><input type="text" placeholder="First Name"/></div>
                        <div className="pb-5 "><input type="text" placeholder="Last Name"/></div>
                        <div><input className="w-[200px] sm:w-[550px] md:w-[650px] xl:w-[1150px] h-24 text-justify" type="textarea" placeholder="Enter comment here"/></div>
                    </div>
                 
                </div>
            </div>
            <Footer/>
        </div>
    )
}