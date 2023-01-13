// icons
import { Bars3Icon } from '@heroicons/react/24/outline';
// nextjs 
import Link from 'next/link';

export default function Navbar() {
     return(
          <div className='h-[10vh] w-screen z-10'>
               <div className='flex justify-between p-10 items-center'>
                    {/* logo */}
                    <div>
                         <span className='text-4xl font-bold text-white hover:text-sky-300 cursor-pointer'>Qü</span>
                    </div>
                    {/* navs */}
                    <div className='hidden md:flex text-md font-bold gap-x-10 text-white items-center'>
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/'>Home</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/about'>
                                   Nosotros
                              </Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300'>Servicios</span>
                         <span className='cursor-pointer hover:text-sky-300'>Portafolio</span>
                    </div>
                    {/* dropdown menu */}
                    <div className='block md:hidden'>
                         <Bars3Icon className='w-10 text-white hover:text-sky-300 cursor-pointer' />
                    </div>
               </div>
          </div>
     );
}