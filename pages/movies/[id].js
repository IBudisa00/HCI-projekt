import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import popcorn from "../../popcorn/popcorn.png"
import Image from 'next/image';
import movies from "../../moviesdata.json"
import { NextSeo } from 'next-seo';

export default function MoviePreview({movie}){
  const myMovie=movie[0];
    return(
        <div className='bg-gray-100 flex flex-col'>
            <NextSeo title={myMovie.name}/>
            <Header/>
            <div className="grow ">
            <div className='m-5 w-screen items-center bg-gray-100 '>
                <div className='flex bg-gray-100 py-6 flex-col md:flex-row'>
                    <div className='flex justify-center md:justify-start'>
                    <Image
                        src={myMovie.picturePath}
                        layout='fixed'
                        alt="hp1"
                        width={200}
                        height={300}
                        />
                    </div>
                        <div className='pt-6 pb-2 mb-2 pl-10 pr-5 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px]'>
                            <h1 className='text-2xl'>{myMovie.name}</h1>
                            <div className='flex flex-row items-center'>
                                <p className='text-xl pr-2'>Rating:</p>
                                <h3 className='pr-1 text-xl'>{myMovie.rate}%</h3>
                                <Image
                                    src={popcorn}
                                    layout='fixed'
                                    alt="popcorn"
                                    width={45}
                                    height={35}
                                    />
                            </div>
                            <p className='text-base pb-7'>{myMovie.category}</p>
                            <div>
                                <p className='text-base pr-6 pt-2 text-justify'>{myMovie.info}</p>
                            </div>
                        </div>
                </div>
                
                <div>
                    <h1 className='text-2xl pt-10 pb-4 pl-10 md:pl-0'>Comments:</h1>
                    <div className='flex flex-col items-center space-y-3 px-5 md:pt-5 md:text-2xl text-xl pt-0  bg-gray-100 mb-10'>
                      <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
                      <p className='text-sm pl-2'>Great movie full of unexpected from start to end.</p>
                      <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
                        <Image
                                  src={popcorn}
                                  layout='fixed'
                                  alt="popcorn"
                                  width={70}
                                  height={55}
                                  /> 88%
                        </div>
                      </div>

                      <div className='h-24 w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] items-center bg-white border-2 border-black flex flex-row justify-between'>
                      <p className='text-sm pl-2'>Love this classic, every once in a while i watch this. My wife hates it tho :)</p>
                      <div className='flex flex-row items-center text-sm sm:text-sm md:text-lg xl:text-xl pr-5'>
                        <Image
                                  src={popcorn}
                                  layout='fixed'
                                  alt="popcorn"
                                  width={70}
                                  height={55}
                                  /> 96%
                        </div>
                      </div>
                      <div className="flex flex-col pt-20 grow w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px]">
                      <div className="flex flex-col py-5 px-5 self-center w-72 sm:w-[600px] md:w-[750px] xl:w-[1200px] bg-black">
                      <input className="pl-2 pt-2 pb-5 text-base border-2 border-black" type='text' placeholder="Enter Comment Here..."/>
                      <input className="pl-2 pt-2 pb-5 text-base border-2 border-black mt-2" type='text' placeholder="Enter percentage of movie rate here..."/>
                      <button className="p-4 bg-white w-32 hover:bg-gray-300 mt-2 self-center">Submit</button>
                      </div>
                      </div>
                    </div>
                </div>
            </div> 
            </div>
            <Footer/>
        </div>
    )
}


export const getStaticPaths = () => {
    const paths = movies.map((movie) => {

      //console.log(movie.name)
      return {
        params: {id:movie.id.toString()},
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = (context) => {
    //console.log('Did this..')
    //console.log(movies)
    const id = context.params.id;
    const movie = movies.filter((movie) => movie.id == id);
    //console.log(movie)

    return {
      props: { movie,},
    };
  };