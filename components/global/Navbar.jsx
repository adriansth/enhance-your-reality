// icons
import { Bars3Icon } from '@heroicons/react/24/outline';
// nextjs 
import Link from 'next/link';
import Image from 'next/image';
// assets 
import logo from '../../media/white-logo-horizontal.png';

export default function Navbar() {
     return(
          <div className='h-[10vh] w-screen z-10'>
               <div className='flex justify-between p-10 items-center'>
                    {/* logo */}
                    <div>
                         <Link href='/'>
                              <Image src={logo} alt="logo" width='150' />
                         </Link>
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
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/portfolio'>
                                   Portafolio
                              </Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/contact'>
                                   Contacto
                              </Link>
                         </span>
                    </div>
                    {/* dropdown menu */}
                    <div className='block md:hidden'>
                         <Bars3Icon className='w-10 text-white hover:text-sky-300 cursor-pointer' />
                    </div>
               </div>
          </div>
     );
}