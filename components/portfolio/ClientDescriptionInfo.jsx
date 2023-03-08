// icons 
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function ClientDescriptionInfo({ name, date, images, title, description, social, url }) {
     return(
          <div className='w-screen flex flex-col-reverse xl:flex-row items-center pt-20 xl:pt-0'>
               {/* images */}
               <div className='w-full lg:w-[60%] flex flex-col lg:flex-row lg:flex-wrap xl:gap-y-5 xl:gap-x-5 lg:py-20 pt-20 pb-0 justify-center items-center lg:gap-x-5 lg:gap-y-5'>
                    {
                         images.map((img) => (
                              <img className='w-full lg:w-[300px] h-[300px] object-cover' src={img} alt="" />
                         ))
                    }
               </div>
               {/* info */}
               <div className='w-full xl:w-[40%] flex flex-col gap-y-5 px-10 lg:px-20 xl:pl-0 xl:pr-10'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>{title}</h1>
                    <p className='text-sm lg:text-md font-light text-gray-700 text-justify'>{description}</p>
                    <button className='bg-violet-900 text-white font-semibold px-5 xl:px-10 py-5 w-[50%] flex items-center justify-center gap-x-3 hover:bg-sky-300 cursor-pointer shadow-lg'>
                         <span className='text-xs xl:text-md'>Ver más</span>
                         <ChevronRightIcon className='w-3 xl:w-5' />
                    </button>
                    {/* info */}
                    <div className='flex flex-col'>
                         <h3 className='text-xl font-bold pb-3'>INFO</h3>
                         <span className='text-xl'><span className='font-semibold pr-5'>NOMBRE:</span> <span className='font-light text-sm text-gray-500'>{name}</span></span>
                         <span className='text-xl'><span className='font-semibold pr-5'>FECHA:</span> <span className='font-light text-sm text-gray-500'>{date}</span></span>
                    </div>
                    {/* social media */}
                    <div className='flex flex-col'>
                         <h3 className='text-xl font-bold pb-5'>REDES SOCIALES</h3>
                    </div>
               </div>
          </div>
     ); 
}