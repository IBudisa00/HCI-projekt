import logo from '../logo/logo.png';
import Image from 'next/image';
import React, { useState } from "react"

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }
    return (
        <div className="flex flex-col w-screen overflow-auto">
            <div className='flex flex-row w-full bg-red-600 pl-5 pt-7 overflow-auto'>
                <div className="flex justify-self-start"><Image
                    src={logo}
                    layout='fixed'
                    alt="logo"
                    width={180}
                    height={70}
                    />
                </div>
                <div className='flex flex-row absolute right-5 pt-2'>
                    <div>
                        <input className='invisible md:visible md:w-[103px] lg:w-[152px]  xl:w-[184px] 2xl:w-[253px] h-7 border-[1.5px] border-black border-r-transparent bg-white text-sm'
                            type="text"
                            placeholder="Name of Movie/Tv show"
                            
                        />
                    </div>
                    <div className=''><button className='transparent md:bg-white w-7 h-7 md:border-[1.5px] md:border-black md:border-l-transparent '><svg className="w-7 h-7 md:w-6 md:h-6 text-black-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg
                                                "
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg></button>
                    </div>
                    <div className="visible md:hidden right-0"><nav className="visible md:hidden flex flex-col ">
                    <button onClick={handleToggle}>{navbarOpen ? (<svg className="flex right-5" xmlns="http://www.w3.org/2000/svg" width="50" height="25" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>) : (<svg className="pb-5" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/></svg>)}</button>
                    </nav></div> 
                </div>
                
            </div>
            <div><nav className='invisible flex flex-row justify-between md:visible list-none h-10 bg-black items-center w-screen px-5'>
                <a className='bg-white text-center text-black md:px-10 lg:px-16  xl:px-20 2xl:px-[115px] py-0 border-2 border-gray-700 hover:bg-gray-300' href="/">Home</a>
                <a className='bg-white text-center text-black md:px-10 lg:px-16  xl:px-20 2xl:px-[115px] py-0 border-2 border-gray-700 hover:bg-gray-300' href='/movies/movies'>Movies</a>
                <a className='bg-white text-center text-black md:px-10 lg:px-16  xl:px-20 2xl:px-[115px] py-0 border-2 border-gray-700 hover:bg-gray-300' href='/tvshows/tvshows'>TV Shows</a>
                <a className='bg-white text-center text-black md:px-10 lg:px-16  xl:px-20 2xl:px-[115px] py-0 border-2 border-gray-700 hover:bg-gray-300' href="/aboutus">About Us</a>
                <a className='bg-white text-center text-black md:px-10 lg:px-16  xl:px-20 2xl:px-[115px] py-0 border-2 border-gray-700 hover:bg-gray-300' href="/login">Log In</a>

                    
            </nav></div>
            <div>{navbarOpen ? (<nav className="visible md:invisible flex flex-col h-screen m-auto px-5 list-none w-screen bg-gray-100">
                <a className='bg-gray-100 text-center text-black px-10 py-2 border-none hover:bg-gray-300' href="/">Home</a>
                <a className='bg-gray-100 text-center text-black px-10 py-2 border-none hover:bg-gray-300' href='/movies/movies'>Movies</a>
                <a className='bg-gray-100 text-center text-black px-10 py-2 border-none hover:bg-gray-300' href='/tvshows/tvshows'>TV Shows</a>
                <a className='bg-gray-100 text-center text-black px-10 py-2 border-none hover:bg-gray-300' href="/aboutus">About Us</a>
                <a className='bg-gray-100 text-center text-black px-10 py-2 border-none hover:bg-gray-300' href="/login">Log In</a>
            </nav>) : ("")}
            
            
            
            
            
            </div>
        </div>
    )}
export default Header;