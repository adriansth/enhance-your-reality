// icons 
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Main() {
    return(
        <div className='h-screen w-full bg-violet-800'>
            <div className='flex justify-between p-10 items-center'>
                <div>
                    <span className='text-4xl font-bold text-white hover:text-sky-300 cursor-pointer'>Qü</span>
                </div>
                <div className='flex text-xl font-bold gap-x-10 text-white items-center'>
                    <span className='cursor-pointer hover:text-sky-300'>Home</span>
                    <span className='cursor-pointer hover:text-sky-300'>About</span>
                    <span className='cursor-pointer hover:text-sky-300'>Services</span>
                    <span className='cursor-pointer hover:text-sky-300'>Portfolio</span>
                    <div className='w-7 hover:text-sky-300 cursor-pointer'>
                        <Bars3Icon />
                    </div>
                </div>
            </div>
        </div>
    );
}