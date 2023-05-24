// media 
import brandIdentity from '../../media/brand-identity.jpg';
// nextjs 
import Image from 'next/image';
import Link from 'next/link';
// icons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Services() {
     return(
          <div className='bg-white w-screen md:h-[100vh] flex flex-col md:flex-row justify-center'>
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
                         <h3 className='text-2xl xl:text-4xl font-semibold text-center'>IDENTIDAD CORPORATIVA</h3>
                         <p className='text-sm xl:text-lg font-light text-gray-500 text-center'>Te asesoramos para crear marcas e identidades empresariales únicas y personalizadas que se destaquen en el mercado.</p>
                         <Link href='/services/identity' className='transition-colors hover:underline flex items-center gap-x-1 hover:text-sky-300'>
                              <span className='font-semibold'>Ver más</span>
                              <ChevronRightIcon className='w-4' />
                         </Link>
                    </div>
               </div>

               {/* section 2 */}
               <div className='flex flex-col w-full md:w-[33.3vw]'>
                    {/* text */}
                    <div className='h-[50vh] md:h-[50%] w-full flex flex-col gap-y-5 items-center justify-center p-10'>
                         <h3 className='text-2xl xl:text-4xl font-semibold text-center'>DESARROLLO WEB</h3>
                         <p className='text-sm xl:text-lg font-light text-gray-500 text-center'>Construimos sitios web personalizados para tu marca; desde páginas informativas hasta el desarrollo de tiendas en línea para tus productos.</p>
                         <Link href='/services/web-development' className='transition-colors hover:underline flex items-center gap-x-1 hover:text-red-500'>
                              <span className='font-semibold'>Ver más</span>
                              <ChevronRightIcon className='w-4' />
                         </Link>
                    </div>
                    {/* image */}
                    <div className='h-[50vh] md:h-[50%] w-full relative'>
                         {/* triangle */}
                         <div className='hidden md:block absolute right-[50%] top-0 z-1 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent'></div>
                         {/* image */}
                         <img src='https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80' className='h-[50vh] object-cover' />
                    </div>
               </div>

               {/* section 3 */}
               <div className='flex flex-col-reverse md:flex-col w-full md:w-[33.4vw]'>
                    {/* image */}
                    <div className='h-[50vh] md:h-[50%] w-full relative'>
                         {/* triangle */}
                         <div className='hidden md:block absolute right-[50%] bottom-0 z-1 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent'></div>
                         {/* image */}
                         <img src='https://images.unsplash.com/photo-1620371001201-5a93043aec34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80' className='h-[50vh] object-cover' />
                    </div>
                    {/* text */}
                    <div className='h-[50vh] md:h-[50%] w-full flex flex-col gap-y-5 items-center justify-center p-10'>
                         <h3 className='text-2xl xl:text-4xl font-semibold text-center'>APPS</h3>
                         <p className='text-sm xl:text-lg font-light text-gray-500 text-center'>Llevamos tu idea a la realidad. Desarrollamos esa app que siempre quisiste crear.</p>
                         <Link href='/services' className='transition-colors hover:underline flex items-center gap-x-1 hover:text-purple-500'>
                              <span className='font-semibold'>Ver más</span>
                              <ChevronRightIcon className='w-4' />
                         </Link>
                    </div>
               </div>
          </div>
     );
}