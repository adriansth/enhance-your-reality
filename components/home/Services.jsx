// media 
import brandIdentity from '../../media/brand-identity.jpg';
import digitalMarketing from '../../media/digital-marketing.jpg';
import webDevelopment from '../../media/web-development.jpg';
// nextjs 
import Image from 'next/image';
// icons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Services() {
     return(
          <div className='w-screen md:h-[100vh] flex flex-col md:flex-row justify-center'>
               {/* vertical sections */}
               {/* section 1 */}
               <div className='flex flex-col-reverse md:flex-col w-full md:w-[33.3vw]'>
                    {/* image */}
                    <div className='h-[50vh] md:h-[50%] w-full relative'>
                         {/* triangle */}
                         <div className='hidden md:block absolute right-[50%] bottom-0 z-1 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent'></div>
                         {/* image */}
                         <Image src={brandIdentity} className='h-[50vh] object-cover' />
                    </div>
                    {/* text */}
                    <div className='h-[50vh] md:h-[50%] w-full flex flex-col gap-y-5 items-center justify-center p-10'>
                         <h3 className='text-2xl xl:text-4xl font-semibold text-center'>IDENTIDAD DE MARCA</h3>
                         <p className='text-sm xl:text-lg font-light text-gray-500 text-center'>Creamos diseños innovadores para destacar tu marca.</p>
                         <button className='flex items-center gap-x-1 hover:text-sky-300'>
                              <span className='font-semibold'>Ver más</span>
                              <ChevronRightIcon className='w-4' />
                         </button>
                    </div>
               </div>

               {/* section 2 */}
               <div className='flex flex-col w-full md:w-[33.3vw]'>
                    {/* text */}
                    <div className='h-[50vh] md:h-[50%] w-full flex flex-col gap-y-5 items-center justify-center p-10'>
                         <h3 className='text-2xl xl:text-4xl font-semibold text-center'>MARKETING DIGITAL</h3>
                         <p className='text-sm xl:text-lg font-light text-gray-500 text-center'>Optimizamos tus ventas y presencia en redes sociales con estrategias de contenido.</p>
                         <button className='flex items-center gap-x-1 hover:text-red-500'>
                              <span className='font-semibold'>Ver más</span>
                              <ChevronRightIcon className='w-4' />
                         </button>
                    </div>
                    {/* image */}
                    <div className='h-[50vh] md:h-[50%] w-full relative'>
                         {/* triangle */}
                         <div className='hidden md:block absolute right-[50%] top-0 z-1 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent'></div>
                         {/* image */}
                         <Image src={digitalMarketing} className='h-[50vh] object-cover' />
                    </div>
               </div>

               {/* section 3 */}
               <div className='flex flex-col-reverse md:flex-col w-full md:w-[33.4vw]'>
                    {/* image */}
                    <div className='h-[50vh] md:h-[50%] w-full relative'>
                         {/* triangle */}
                         <div className='hidden md:block absolute right-[50%] bottom-0 z-1 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent'></div>
                         {/* image */}
                         <Image src={webDevelopment} className='h-[50vh] object-cover' />
                    </div>
                    {/* text */}
                    <div className='h-[50vh] md:h-[50%] w-full flex flex-col gap-y-5 items-center justify-center p-10'>
                         <h3 className='text-2xl xl:text-4xl font-semibold text-center'>DESARROLLO WEB</h3>
                         <p className='text-sm xl:text-lg font-light text-gray-500 text-center'>Construimos sitios web para tu marca, ya sea sitios informativos o tiendas en línea.</p>
                         <button className='flex items-center gap-x-1 hover:text-purple-500'>
                              <span className='font-semibold'>Ver más</span>
                              <ChevronRightIcon className='w-4' />
                         </button>
                    </div>
               </div>
          </div>
     );
}