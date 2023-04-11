// utils 
import { cleanTextShort, getImageSrc, formatDate } from '../../utils/blog';
// next 
import Link from 'next/link';
// icons 
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function BlogPost({ id, title, content, date, tags }) {

   const cleanText = cleanTextShort(content);
   const imgUrl = getImageSrc(content);
   const published = formatDate(date)

   return(
      <div className='w-full flex flex-col gap-y-5'>
         {/* embedded image (if any) */}
         {
            imgUrl && 
            <div className='relative w-full'>
               <img src={imgUrl} alt={title} className='w-full object-cover h-[500px] rounded-lg shadow-lg' />
               {/* tags */}                  
               <div className='absolute bottom-3 left-3 flex gap-x-1'>
                  {
                     tags?.map((tag) => (
                        <span className='bg-sky-400 shadow-lg text-white px-2 py-1 text-xs font-semibold rounded-lg'>{tag}</span>
                     ))
                  }
               </div>
            </div>
         }
         {/* title */}
         <h3 className='text-2xl md:text-4xl font-semibold hover:text-sky-400 transition-colors text-justify'>
            <Link href={`/blog/${id}`}>
               {title}
            </Link>
         </h3>
         {/* content short */}
         <div>
            <p className='text-sm md:text-md text-gray-500 font-light text-justify'>
               {cleanText}
            </p>
         </div>
         {/* date */}
         <p className='text-gray-400 font-bold text-xs'>Publicado: {published}</p>
         {/* view */}
         <Link href={`/blog/${id}`} className='flex gap-x-2 text-sky-400 hover:text-violet-900 transition-colors'>
            <span className='font-semibold'>Ver más</span>
            <ChevronRightIcon className='w-5' />
         </Link>
      </div>
   );
}