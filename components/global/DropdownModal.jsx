// next
import Link from 'next/link';
// icon 
import { XMarkIcon } from '@heroicons/react/24/solid';
// redux 
import { useDispatch } from 'react-redux';

export default function DropdownModal() {

   const dispatch = useDispatch();
   const closeModal = () => dispatch({ type: 'CLOSE_HAMBURGER' });

   return(
      <div className='bg-violet-900 w-screen h-screen p-10 flex flex-col justify-center items-center gap-y-10 text-2xl font-semibold text-white fixed z-[1000]'>
         <div className='w-full flex justify-center'>
            <XMarkIcon onClick={closeModal} className='w-10 text-white hover:text-sky-300 transition-colors cursor-pointer' />
         </div>
         <span className='hover:text-sky-300 cursor-pointer transition-colors'>
            <Link href='/' onClick={closeModal}>Home</Link>
         </span>
         <span className='hover:text-sky-300 cursor-pointer transition-colors'>
            <Link href='/about' onClick={closeModal}>Nosotros</Link>
         </span>
         <span className='hover:text-sky-300 cursor-pointer transition-colors'>
            <Link href='/services' onClick={closeModal}>Soluciones</Link>
         </span>
         <span className='hover:text-sky-300 cursor-pointer transition-colors'>
            <Link href='/portfolio' onClick={closeModal}>Portafolio</Link>
         </span>
         <span className='hover:text-sky-300 cursor-pointer transition-colors'>
            <Link href='/blog' onClick={closeModal}>Blog</Link>
         </span>
         <span className='hover:text-sky-300 cursor-pointer transition-colors'>
            <Link href='/contact' onClick={closeModal}>Contacto</Link>
         </span>
      </div>
   );
}