// icons 
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// next 
import Link from 'next/link';

export default function ServiceDescriptionCard({ name, description, available, image, link }) {
     return(
          <div>
               {
                    available ? (
                         <Link href={`/services/${link}`} className='w-full lg:w-[275px] h-[550px] border flex flex-col justify-between rounded-lg hover:scale-105 transition-transform cursor-pointer shadow-lg hover:bg-slate-100'>
                         {/* info */}
                         <div className='flex flex-col gap-y-5 p-5'>
                              <div className='flex justify-between'>
                                   <h3 className='text-xl sm:text-2xl font-semibold'>{name}</h3>
                                   <ChevronRightIcon className='w-5 text-gray-500' />
                              </div>
                              <p className='font-light text-gray-500 text-sm sm:text-md'>{description}</p>
                         </div>
                         {/* view more button */}
                         <div className='w-full relative'>
                              {/* image */}
                              <img src={image} alt="" className='w-full h-[250px] object-cover rounded-b-lg' />
                         </div>
                    </Link>
                    ) : (
                         <div href={`/services/${link}`} className='w-full lg:w-[275px] h-[550px] border flex flex-col justify-between rounded-lg hover:scale-105 transition-transform cursor-pointer shadow-lg hover:bg-slate-100'>
                              {/* info */}
                              <div className='flex flex-col gap-y-5 p-5'>
                                   <div className='flex justify-between'>
                                        <h3 className='text-xl sm:text-2xl font-semibold'>{name}</h3>
                                        <ChevronRightIcon className='w-5 text-gray-500' />
                                   </div>
                                   <p className='font-light text-gray-500 text-sm sm:text-md'>{description}</p>
                              </div>
                              {/* view more button */}
                              <div className='w-full relative'>
                                   {/* image */}
                                   <img src={image} alt="" className='w-full h-[250px] object-cover rounded-b-lg' />
                                   <span className='absolute bottom-0 bg-orange-500 font-semibold sm:text-sm text-xs text-white w-full text-center py-1 rounded-b-lg'>Próximamente</span>
                              </div>
                         </div>
                    )
               }
          </div>
     );
}