// hooks 
import { useState, useEffect } from 'react';
// axios
import axios from 'axios';
// next
import Link from 'next/link';

export default function BlogSidebar() {

   const [ posts, setPosts ] = useState([]);

   useEffect(() => {
      axios.get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts?key=${process.env.NEXT_PUBLIC_BLOGGER_APIKEY}`)
         .then((res) => {
            setPosts(res.data.items);
            console.log(res.data.items);
         })
         .catch((err) => console.log(err));
   }, []);

   return(
      <div className='w-full lg:w-[30vw] pt-20 pb-0 lg:py-20 px-10 md:px-20 lg:pl-10 lg:pr-20 flex flex-col'>
         {/* about */}
         <div className='hidden lg:flex flex-col gap-y-5 border-b pb-5'>
            <h2 className='font-semibold text-2xl'>NOSOTROS</h2>
            <p className='text-gray-500 font-light text-sm xl:text-xl'>
               Somos una empresa de desarrollo tecnológico y transformación digital; creemos en la importancia de la creatividad y la innovación para crear soluciones tecnológicas efectivas para nuestros clientes.
            </p>
         </div>
         {/* recent posts */}
         <div className='hidden lg:flex flex-col gap-y-5 py-5 border-b'>
            <h2 className='font-semibold text-2xl'>RECIENTES</h2>
            <div className='text-gray-500 font-semibold flex flex-col gap-y-3'>
               {
                  posts.map((post) => (
                     <Link key={post?.id} href={`/blog/${post?.id}`}>
                        <li className='list-disc hover:text-sky-400 transition-colors text-justify text-xs lg:text-md'>{post?.title}</li>
                     </Link>
                  ))
               }
            </div>
         </div>
         {/* tags */}
         <div className='flex flex-col gap-y-5 border-b lg:border-none pb-5 pt-0 lg:pt-5'>
            <h2 className='font-semibold text-2xl'>TAGS</h2>
            <div className='flex gap-x-2 gap-y-2 flex-wrap'>
               <span className='font-semibold text-white text-xs bg-sky-400 px-2 py-1 rounded-lg hover:bg-violet-900 transition-colors cursor-pointer shadow-lg'>Creatividad</span>
               <span className='font-semibold text-white text-xs bg-sky-400 px-2 py-1 rounded-lg hover:bg-violet-900 transition-colors cursor-pointer shadow-lg'>Marketing</span>
               <span className='font-semibold text-white text-xs bg-sky-400 px-2 py-1 rounded-lg hover:bg-violet-900 transition-colors cursor-pointer shadow-lg'>Tecnología</span>
               <span className='font-semibold text-white text-xs bg-sky-400 px-2 py-1 rounded-lg hover:bg-violet-900 transition-colors cursor-pointer shadow-lg'>Branding</span>
               <span className='font-semibold text-white text-xs bg-sky-400 px-2 py-1 rounded-lg hover:bg-violet-900 transition-colors cursor-pointer shadow-lg'>Digital</span>
               <span className='font-semibold text-white text-xs bg-sky-400 px-2 py-1 rounded-lg hover:bg-violet-900 transition-colors cursor-pointer shadow-lg'>IA</span>
            </div> 
         </div>
      </div>
   );
}