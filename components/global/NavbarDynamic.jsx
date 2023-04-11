// hooks 
import { useState, useEffect } from 'react';
// framer motion 
import { AnimatePresence, motion } from 'framer-motion';
// icons 
import { Bars3Icon } from '@heroicons/react/24/solid'; 
// next
import Link from 'next/link';
import Image from 'next/image';
// assets 
import logo from '../../media/white-logo-horizontal.png';
// components 
import DropdownModal from '../../components/global/DropdownModal';
// redux 
import { useDispatch, useSelector } from 'react-redux';

export default function NavbarDynamic() {

   const [ show, setShow ] = useState(false);
   const [ lastScrollY, setLastScrollY ] = useState(0);

   // redux 
   const dispatch = useDispatch();
   const openModal = () => dispatch({ type: 'OPEN_HAMBURGER' });
   const modal = useSelector(state => state.hamburgerOpened);

   const controlNavbar = () => {
      if (typeof window !== 'undefined') {
         if (window.scrollY > 500) {
            setShow(true);
         } else {
            setShow(false);
         }
         setLastScrollY(window.scrollY);
      }
   }

   useEffect(() => {
      if (typeof window !== 'undefined') {
         window.addEventListener('scroll', controlNavbar);
         // cleanup function
         return () => {
              window.removeEventListener('scroll', controlNavbar);
         }
      }
   }, [lastScrollY]);

   return(
      <AnimatePresence>
         {
            show && (
               <motion.div className='fixed top-0 z-[1000] w-screen bg-black shadow-lg' initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} exit={{y: -100}}>
                  <div className='flex justify-between px-10 py-5 items-center'>
                     {/* logo */}
                     <div>
                        <Link href='/'>
                           <Image src={logo} alt='logo' width='75'></Image>
                        </Link>
                     </div>
                     {/* navs */}
                     <div className='hidden md:flex text-md font-bold gap-x-10 text-white items-center'>
                        <span className='cursor-pointer hover:text-sky-300'>
                           <Link href='/'>Home</Link>
                        </span>
                        <span className='cursor-pointer hover:text-sky-300'>
                           <Link href='/about'>Nosotros</Link>
                        </span>
                        <span className='cursor-pointer hover:text-sky-300'>
                           <Link href='/services'>Soluciones</Link>
                        </span>
                        <span className='cursor-pointer hover:text-sky-300'>
                           <Link href='/portfolio'>Portafolio</Link>
                        </span>
                        <span className='cursor-pointer hover:text-sky-300'>
                           <Link href='/blog'>Blog</Link>
                        </span>
                        <span className='cursor-pointer hover:text-sky-300'>
                           <Link href='/contact'>Contacto</Link>
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
               </motion.div>
            )
         }
      </AnimatePresence>
   );
}