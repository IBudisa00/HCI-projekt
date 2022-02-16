import hp1 from "../public/movies/hp1.jpg";
import interstellar from "../public/movies/interstellar.jpg";
import schindler from "../public/movies/schindler.jpg";
import lotr3 from "../public/movies/lotr3.jpg";
import joker from "../public/movies/joker.jpg";
import Image from 'next/image';

const NewIn = () => {
    return(
        <div className='px-5 md:pt-5 md:text-2xl text-xl pt-0 pb-5 bg-gray-100'>
          New In:
          <div className='flex flex-col items-center md:items-stretch md:flex-row md:justify-center md:top-0 space-x-2 md:space-x-3 lg:space-x-15 xl:space-x-20  pt-10'>
          
          <a href='/movies/1'><Image
                    src={hp1}
                    layout='fixed'
                    alt="hp1"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Harry Potter and The Sorcerer's Stone</div></a>
          
          <a href='/movies/2'><Image
                    src={interstellar}
                    layout='fixed'
                    alt="interstellar"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Interstellar</div></a>
          <a href='/movies/5'><Image
                    src={schindler}
                    layout='fixed'
                    alt="schindler"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Schindler's list</div></a>
          <a href='/movies/4'><Image
                    src={lotr3}
                    layout='fixed'
                    alt="lotr3"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center py-2">Lord of The Rings: Return of The King</div></a>
          <a className="pb-10" href='/movies/3'><Image
                    src={joker}
                    layout='fixed'
                    alt="joker"
                    width={135}
                    height={200}
                    /><div className="w-32 text-sm text-center">Joker</div></a>
        </div>
        </div>
    )
}

export default NewIn;