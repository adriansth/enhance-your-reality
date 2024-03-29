// next.js
import Image from 'next/image';
import Link from 'next/link';
// media
import redPattern from '../../media/red-pattern.jpg';
import blueWoman from '../../media/blue-woman.jpg';
// icons 
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// framer motion
import { motion } from 'framer-motion'
// components 
import MainBackground from './MainBackground';

export default function Main() {
    return(
        <div className='h-[100vh] w-full'>
            {/* background */}
            <div className='absolute z-[-10] w-full h-full'>
                <MainBackground />
            </div>
            {/* main */}
            <div className='flex justify-center items-center h-[90vh]'>
                {/* content container */}
                <motion.div initial={{ opacity: 0, x: 1200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className='w-[60%] h-[60%] mb-[10vh] relative mt-[10vh]'>
                    {/* text container */}
                    <div className='absolute w-[70%] z-[100]'>
                        <h1 className='text-5xl md:text-8xl font-bold text-white my-5'>ENHANCE YOUR REALITY</h1>
                        <p className='text-2xl md:text-3xl font-bold text-white w-full xl:w-[50%] my-5'>Impulsamos tu presencia digital.</p>
                        <Link href='/services' className='transition-colors rounded-lg w-[180px] text-sm md:text-lg bg-rose-500 px-10 py-5 font-bold text-white flex items-center justify-between gap-x-2 hover:bg-sky-300 shadow-lg my-5'>
                            <span>Ver más</span>
                            <ChevronRightIcon className='w-3 sm:w-5' />
                        </Link>
                    </div>
                    {/* images container */}
                    <div className='absolute z-[0] w-full h-full flex justify-end'>
                        {/* images container child */}
                        <div className='w-[75%] h-full flex flex-col justify-end relative'>
                            {/* back image */}
                            <div className='w-full h-full absolute z-[10] flex justify-end items-end'>
                                <Image src={redPattern} alt="" className='w-[95%] h-[95%] shadow-xl object-cover rounded-lg' />
                            </div>
                            {/* front image */}
                            <div className='w-full h-full absolute z-[20] flex justify-start'>
                                <Image src={blueWoman} alt="" className='w-[95%] h-[95%] shadow-xl object-cover rounded-lg' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}