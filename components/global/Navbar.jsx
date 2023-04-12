// icons
import { Bars3Icon } from '@heroicons/react/24/outline';
// nextjs 
import Link from 'next/link';
import Image from 'next/image';
// assets 
import logo from '../../media/white-logo-horizontal.png';
// components
import DropdownModal from './DropdownModal';
// redux 
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {

     // redux
     const dispatch = useDispatch();
     const openModal = () => dispatch({ type: 'OPEN_HAMBURGER' });
     const modal = useSelector(state => state.hamburgerOpened);

     return(
          <div className='h-[10vh] w-screen z-[1000]'>
               <div className='flex justify-between p-10 items-center'>
                    {/* logo */}
                    <div>
                         <Link href='/'>
                              <Image src={logo} alt="logo" width='150' />
                         </Link>
                    </div>
                    {/* navs */}
                    <div className='hidden md:flex text-md font-bold gap-x-10 text-white items-center'>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/'>Home</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/about'>
                                   Nosotros
                              </Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/services'>
                                   Soluciones
                              </Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/portfolio'>
                                   Portafolio
                              </Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/blog'>
                                   Blog
                              </Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/contact'>
                                   Contacto
                              </Link>
                         </span>
                    </div>
                    {/* dropdown menu */}
                    <div className='block md:hidden'>
                         <Bars3Icon
                              className='w-10 text-white hover:text-sky-300 cursor-pointer'
                              onClick={() => openModal()}
                         />
                    </div>
                    {
                         modal && (
                              <div className='absolute top-0 left-0'>
                                   <DropdownModal />
                              </div>
                         )
                    }
               </div>
          </div>
     );
}