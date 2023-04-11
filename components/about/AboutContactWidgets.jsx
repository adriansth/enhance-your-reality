// icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";
// media 
import contactImg from '../../media/about-contact.jpg';
// nextjs
import Image from 'next/image';
import Link from 'next/link';

export default function AboutContactWidgets() {
     return(
          <div className='bg-white w-screen md:h-[50vh] flex flex-col md:flex-row'>
               {/* widget 1 */}
               <div className='w-full md:w-[33.3vw] h-full bg-sky-300 flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20'>
                    <h2 className='text-white font-bold text-3xl xl:text-6xl'>¡SALÚDANOS!</h2>
               </div>
               {/* widget 2 */}
               <div className='w-full md:w-[33.3vw] h-full bg-slate-100 flex flex-col gap-y-5 items-start justify-center p-10 sm:p-20 md:p-10 xl:p-20'>
                         <h2 className='text-3xl xl:text-5xl font-bold w-full'>VEÁMONOS</h2>
                         <p className='text-gray-500 font-light text-sm xl:text-md'>Contáctanos para conversar acerca de tus necesidades y cómo podemos ayudarte a crecer tu negocio.</p>
                         <Link href='/contact' className='text-sm xl:text-lg bg-violet-900 px-5 xl:px-10 py-3 xl:py-5 font-bold text-white flex items-center gap-x-2 hover:bg-sky-300 shadow-lg rounded-lg'>
                              <span>Salúdanos</span>
                              <ChevronRightIcon className='w-3 xl:w-5' />
                         </Link>
                    </div>
               {/* widget 3 */}
               <div className='w-full md:w-[33.4vw] h-full'>
                    <Image src={contactImg} className='w-full h-full object-cover' />
               </div>
          </div>
     );
}