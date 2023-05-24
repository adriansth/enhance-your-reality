// next
import Image from 'next/image';
// assets 
import identityMain from '../../../media/identity-main.webp';

export default function IdentityMain() {
   return(
      <div className='w-screen h-[60vh]'>
         <h1 className='text-4xl sm:text-6xl md:text-7xl font-semibold text-white absolute z-[0] top-[27%] w-full text-center px-10'>Identidad de marca corporativa</h1>
         <Image src={identityMain} className='w-full h-full object-cover' alt='Identidad de marca corporativa'></Image>
      </div>
   );
}