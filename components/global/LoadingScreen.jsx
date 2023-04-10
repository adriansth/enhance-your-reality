// assets
import logo from '../../media/logo-icon-white.png';
// next
import Image from 'next/image';
// framer motion
import { motion, useAnimation } from 'framer-motion';
// hooks 
import { useEffect } from 'react'; 

export default function LoadingScreen() {

   const controls = useAnimation();

   useEffect(() => {
      controls.start('visible');
   }, []);

   const variants = {
      hidden: { scale: 0, rotateZ: 0 },
      visible: { scale: 1, rotateZ: 360 },
      goback: { scale: 1, rotateZ: -360 }, 
   }

   return(
      <div className='bg-black w-screen h-screen flex items-center justify-center'>
         <motion.div 
            className='w-[100px] h-[100px]'
            variants={variants}
            animate={controls}
            transition={{ delay: 0.3, duration: 0.8, repeat: Infinity }}
         >
            <Image src={logo} alt="" width='100' height='100' />
         </motion.div>
      </div>
   );
}