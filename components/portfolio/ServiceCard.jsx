// hooks 
import { useState } from 'react';
// framer motion
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {

     const [hovered, setHovered] = useState(false);

     return(
               <div className='bg-slate-100 w-[250px] sm:w-[450px] md:w-[500px] h-[250px] sm:h-[450px] md:h-[500px] rounded-lg'>
                    <div className='w-full h-full flex justify-center items-center relative cursor-pointer' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                         <div className='w-full h-full flex justify-center items-center'>
                              <img src={service.img} alt="" className='w-full object-cover' />
                         </div>
                         {
                              hovered &&
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className='rounded-lg bg-black bg-opacity-60 w-full h-full absolute flex flex-col justify-center items-center'>
                                   <span className='text-5xl font-semibold text-white'>{service.name}</span>
                                   <span className='text-white'>{service.description}</span>
                              </motion.div>
                         }
                    </div>
               </div>
     );
}