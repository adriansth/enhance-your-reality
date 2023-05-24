// next 
import Image from 'next/image';
// assets
import marketingMain from '../../../media/marketing-main.webp';

export default function MarketingMain() {
   return(
      <div className='w-screen h-[60vh] flex justify-center'>
         <h1 className='text-4xl sm:text-6xl md:text-7xl font-semibold text-white absolute z-[0] top-[27%] text-center px-10 bg-black px-10 py-5 bg-opacity-50'>Marketing Digital</h1>
         <Image src={marketingMain} className='w-full h-full object-cover' alt='Marketing digital'></Image>
      </div>
   );
}