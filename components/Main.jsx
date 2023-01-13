// next.js
import Image from 'next/image';
// media
import redPattern from '../media/red-pattern.jpg';
import blueWoman from '../media/blue-woman.jpg';
// icons 
import { Bars3Icon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Main() {
    return(
        <div className='h-[100vh] w-full bg-violet-900'>
            {/* navbar */}
            <div className='flex justify-between p-10 items-center h-[10vh]'>
                <div>
                    <span className='text-4xl font-bold text-white hover:text-sky-300 cursor-pointer'>Qü</span>
                </div>
                {/* navs */}
                <div className='hidden md:flex text-md font-bold gap-x-10 text-white items-center'>
                    <span className='cursor-pointer hover:text-sky-300'>Home</span>
                    <span className='cursor-pointer hover:text-sky-300'>Nosotros</span>
                    <span className='cursor-pointer hover:text-sky-300'>Servicios</span>
                    <span className='cursor-pointer hover:text-sky-300'>Portafolio</span>
                </div>
                {/* dropdown menu */}
                <div className='block md:hidden'>
                    <Bars3Icon className='w-10 text-white hover:text-sky-300 cursor-pointer' />
                </div>
            </div>
            {/* main */}
            <div className='flex justify-center items-center h-[90vh]'>
                {/* content container */}
                <div className='w-[60%] h-[60%] mb-[10vh] relative mt-[10vh]'>
                    {/* text container */}
                    <div className='absolute w-[70%] z-[100]'>
                        <h1 className='text-5xl md:text-8xl font-bold text-white my-5'>ENHANCE YOUR REALITY</h1>
                        <p className='text-2xl md:text-3xl font-bold text-white w-full xl:w-[50%] my-5'>Cuenta una historia para tu marca.</p>
                        <button className='text-sm md:text-lg bg-rose-500 px-10 py-5 font-bold text-white flex items-center gap-x-2 hover:bg-sky-300 shadow-lg my-5'>
                            <span>Ver más</span>
                            <ChevronRightIcon className='w-3 sm:w-5' />
                        </button>
                    </div>
                    {/* images container */}
                    <div className='absolute z-[0] w-full h-full flex justify-end'>
                        {/* images container child */}
                        <div className='w-[75%] h-full flex flex-col justify-end relative'>
                            {/* back image */}
                            <div className='w-full h-full absolute z-[10] flex justify-end items-end'>
                                <Image src={redPattern} alt="" className='w-[95%] h-[95%] shadow-xl object-cover' />
                            </div>
                            {/* front image */}
                            <div className='w-full h-full absolute z-[20] flex justify-start'>
                                <Image src={blueWoman} alt="" className='w-[95%] h-[95%] shadow-xl object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}