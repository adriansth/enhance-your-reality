// utils 
import { cleanTextShort, getImageSrc } from '../../utils/blog';

export default function BlogPost({ title, content }) {

   const cleanText = cleanTextShort(content);
   const imgUrl = getImageSrc(content);

   return(
      <div className='w-full flex flex-col gap-y-5'>
         {/* embedded image (if any) */}
         {
            imgUrl && 
            <img src={imgUrl} alt={title} className='w-full object-cover h-[500px] rounded-lg' />
         }
         {/* title */}
         <h3 className='text-4xl font-semibold'>{title}</h3>
         {/* content short */}
         <div>
            <p className='text-gray-500 font-light'>
               {cleanText}
            </p>
         </div>
      </div>
   );
}