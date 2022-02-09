import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Header from '../components/Header'
import Footer from '../components/Footer';
import hp1 from "../movies/hp1.jpg";
import interstellar from "../movies/interstellar.jpg";
import schindler from "../movies/schindler.jpg";
import lotr3 from "../movies/lotr3.jpg";
import joker from "../movies/joker.jpg";

export default function Home() {
  return (
    <div className='bg-gray-100 w-screen h-screen'> 
      <Header/>
        <div className='px-5 md:pt-5 md:text-2xl text-xl pt-0 pb-5 bg-gray-100'>
          Editor's Choice:
        <div className='flex flex-row flex-wrap justify-center space-x-2 md:space-x-3 lg:space-x-15 xl:space-x-20  pt-10'>
          
          <div ><Image
                    src={hp1}
                    layout='fixed'
                    alt="hp1"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Harry Potter and The Sorcerer's Stone</div></div>
          
          <div><Image
                    src={interstellar}
                    layout='fixed'
                    alt="interstellar"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Interstellar</div></div>
          <div><Image
                    src={schindler}
                    layout='fixed'
                    alt="schindler"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Schindler's list</div></div>
          <div><Image
                    src={lotr3}
                    layout='fixed'
                    alt="lotr3"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Lord of The Rings: Return of The King</div></div>
          <div className="pb-10"><Image
                    src={joker}
                    layout='fixed'
                    alt="joker"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center">Joker</div></div>
        </div>
        </div>
        <div className='px-5 md:pt-5 md:text-2xl text-xl py-3 bg-gray-100 mb-5'>Current Top 5 Movies:</div>
        <div className='flex flex-col items-center space-y-3 px-5 md:pt-5 md:text-2xl text-xl pt-0  bg-gray-100'> 
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
        </div>


        <div className='px-5 md:pt-5 md:text-2xl text-xl py-3 pt-5 bg-gray-100'>Current Top 5 TV Shows:</div>
        <div className='flex flex-col items-center space-y-3 px-5 md:pt-5 md:text-2xl text-xl pt-0  bg-gray-100'> 
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black'>
            <div className=''></div>
            <div className=''></div>
          </div>
        </div>

    </div>
  )
}

