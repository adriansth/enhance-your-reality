// media
import aboutMain from '../../media/about-main.jpg';
// nextjs
import Image from 'next/image';

export default function AboutMain() {
     return(
          <div className='h-[60vh] w-screen'>
               <h1 className='text-4xl sm:text-6xl md:text-8xl font-semibold text-white absolute z-[0] top-[40%] w-full text-center'>NOSOTROS</h1>
               <Image className='h-full w-full object-cover absolute z-[-1]' src={aboutMain} />
          </div>
     );
}