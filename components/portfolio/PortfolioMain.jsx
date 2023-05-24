// next
import Image from 'next/image';
// assets
import portfolioMain from '../../media/portfolio-main.webp';

export default function PortfolioMain() {
     return(
          <div className='w-screen h-[60vh]'>
               <h1 className='text-4xl sm:text-6xl md:text-8xl font-semibold text-white absolute z-[0] top-[25%] w-full text-center'>Nuestro portafolio</h1>
               <Image src={portfolioMain} alt="" className='w-full h-full object-cover' />
          </div>
     );
}