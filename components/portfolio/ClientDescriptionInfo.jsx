// icons 
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// next
import Link from 'next/link';

export default function ClientDescriptionInfo({ name, date, images, title, description, social, url }) {
     return(
          <div className='bg-white w-screen flex flex-col-reverse xl:flex-row items-center pt-20 xl:pt-0'>
               {/* images */}
               <div className='w-full lg:w-[65%] flex flex-col lg:flex-row lg:flex-wrap lg:py-20 pt-20 pb-0 justify-center items-center'>
                    {
                         images?.map((img) => (
                              <img className='w-full lg:w-[300px] h-[300px] 2xl:w-[500px] 2xl:h-[500px] object-cover' src={img} alt="" key={img} />
                         ))
                    }
               </div>
               {/* info */}
               <div className='w-full xl:w-[35%] flex flex-col gap-y-5 px-10 lg:px-20 xl:px-10'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>{title}</h1>
                    <p className='text-sm lg:text-md font-light text-gray-700 text-justify'>{description}</p>
                    <Link href={url} target='_blank'>
                         <button className='transition-colors rounded-lg bg-violet-900 text-white font-semibold px-5 xl:px-10 py-5 w-[50%] flex items-center justify-center gap-x-3 hover:bg-sky-300 cursor-pointer shadow-lg'>
                              <span className='text-xs xl:text-md'>Ver más</span>
                              <ChevronRightIcon className='w-3 xl:w-5' />
                         </button>
                    </Link>
                    {/* info */}
                    <div className='flex flex-col'>
                         <h3 className='text-xl font-bold pb-3'>INFO</h3>
                         <span className='text-xl'><span className='font-semibold pr-5'>Nombre:</span> <span className='font-light text-sm text-gray-500'>{name}</span></span>
                         <span className='text-xl'><span className='font-semibold pr-5'>Fecha:</span> <span className='font-light text-sm text-gray-500'>{date}</span></span>
                    </div>
                    {/* social media */}
                    {
                         (social?.twitter || social?.facebook || social?.linkedin || social?.instagram) &&
                         <div className='flex flex-col'>
                              <h3 className='text-xl font-bold pb-5'>REDES SOCIALES</h3>
                              <div className='w-full flex justify-start gap-x-3'>
                                   {
                                        social?.facebook && 
                                        <Link href={social.facebook} target='_blank'>
                                             <img src='https://img.icons8.com/ios-glyphs/256/facebook-circled--v1.png' alt="" className='w-5 h-5 hover:opacity-50 cursor-pointer' />
                                        </Link>
                                   }
                                   {    
                                        social?.twitter &&
                                        <Link href={social.twitter} target='_blank'>
                                             <img src='https://img.icons8.com/ios-glyphs/256/twitter--v1.png' alt="" className='w-5 h-5 hover:opacity-50 cursor-pointer' />
                                        </Link>
                                   }
                                   {
                                        social?.linkedin && 
                                        <Link href={social.linkedin} target='blank'>
                                             <img src='https://img.icons8.com/ios-glyphs/256/linkedin-circled--v1.png' alt="" className='w-5 h-5 hover:opacity-50 cursor-pointer' />
                                        </Link>  
                                   }
                                   {
                                        social?.instagram && 
                                        <Link href={social.instagram} target='blank'>
                                             <img src='https://img.icons8.com/ios-glyphs/256/instagram-new.png' alt="" className='w-5 h-5 hover:opacity-50 cursor-pointer' />
                                        </Link>
                                   }
                              </div>
                         </div>
                    }
               </div>
          </div>
     ); 
}