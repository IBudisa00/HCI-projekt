import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import popcorn from "../popcorn/popcorn.png"
import lotr3 from "../public/lotr3.jpg"
import joker from "../public/joker.jpg";
import schindler from "../public/schindler.jpg";
import hp1 from "../public/hp1.jpg";
import interstellar from "../public/interstellar.jpg";
import friends from "../public/friends.jpg";
import dark from "../public/dark.jpg";
import chernobyl from "../public/chernobyl.jpg";
import breakingBad from "../public/breakingBad.jpg";
import got from "../public/got.jpg";
import { NextSeo } from 'next-seo';
import EditorMovies from '../components/EditorMovies';

export default function Home() {
  return (
    
    <div className='bg-gray-100 w-screen h-screen flex-col'> 
    <NextSeo title="Movie Night - Home"/>
      <Header/>
      <div className='grow bg-gray-100'>
        <EditorMovies/>
        
        <div className='px-5 md:pt-5 md:text-2xl text-xl py-3 bg-gray-100 mb-5'>Current Top 5 Movies:</div>
        <div className='flex flex-col items-center space-y-3 px-5 md:pt-5 md:text-2xl text-xl pt-0  bg-gray-100 mb-10'> 
        <a href='movies/4' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>1.</div>
              <Image
                      src={lotr3}
                      layout='fixed'
                      alt="lotr3"
                      width={80}
                      height={93}
                      /> 
              <div>LoTR 3<br/>
              Adventure, Fantasy</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 95%
              </div>
          </a>
          <a href='movies/3' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>2.</div>
              <Image
                      src={joker}
                      layout='fixed'
                      alt="joker"
                      width={80}
                      height={93}
                      /> 
              <div>Joker<br/>
              Crime, Drama, Thriller</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 93%
              </div>
          </a>
          <a href='movies/5' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>3.</div>
              <Image
                      src={schindler}
                      layout='fixed'
                      alt="schindler"
                      width={80}
                      height={93}
                      /> 
              <div>Schindler's list<br/>
              Biography, Drama, History</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 92%
              </div>
          </a>
          <a href='movies/1' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>4.</div>
              <Image
                      src={hp1}
                      layout='fixed'
                      alt="hp1"
                      width={80}
                      height={93}
                      /> 
              <div>Harry Potter 1<br/>
              Adventure, Family, Fanatasy</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 90%
              </div>
          </a>
          <a href='movies/2' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>5.</div>
              <Image
                      src={interstellar}
                      layout='fixed'
                      alt="interstellar"
                      width={80}
                      height={93}
                      /> 
              <div>Interstellar<br/>
              Adventure, Drama, Sci-Fi</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 89%
              </div>
          </a>
        </div>


        <div className='px-5 md:pt-5 md:text-2xl text-xl py-3 pt-5 bg-gray-100 mb-5'>Current Top 5 TV Shows:</div>
        <div className='flex flex-col items-center space-y-3 px-5 md:pt-5 md:text-2xl text-xl pt-0  bg-gray-100 pb-20'> 
        <a href='/tvshows/4' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>1.</div>
              <Image
                      src={got}
                      layout='fixed'
                      alt="got"
                      width={80}
                      height={93}
                      /> 
              <div>Game of Thrones<br/>
              Action, Adventure, Drama</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 94%
              </div>
          </a>
          <a href='/tvshows/1' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>2.</div>
              <Image
                      src={friends}
                      layout='fixed'
                      alt="friends"
                      width={80}
                      height={93}
                      /> 
              <div>Friends<br/>
              Comedy, Romance</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 93%
              </div>
          </a>
          <a href='/tvshows/2' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>3.</div>
              <Image
                      src={dark}
                      layout='fixed'
                      alt="dark"
                      width={80}
                      height={93}
                      /> 
              <div>Dark<br/>
              Crime, Drama, Mystery</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 90%
              </div>
          </a>
          <a href='/tvshows/5' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>4.</div>
              <Image
                      src={chernobyl}
                      layout='fixed'
                      alt="chernobyl"
                      width={80}
                      height={93}
                      /> 
              <div>Chernobyl<br/>
              Drama, History, Thriller</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 89%
              </div>
          </a>
          <a href='/tvshows/6' className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl space-x-2'><div>5.</div>
              <Image
                      src={breakingBad}
                      layout='fixed'
                      alt="breakingBad"
                      width={80}
                      height={93}
                      /> 
              <div>Breaking Bad<br/>
              Crime, Drama, Thriller</div>
              </div></div>
              <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
              <Image
                        src={popcorn}
                        layout='fixed'
                        alt="popcorn"
                        width={70}
                        height={55}
                        /> 87%
              </div>
          </a>
        </div>
      
      </div>  
      <Footer/>
    </div>
  )
}

