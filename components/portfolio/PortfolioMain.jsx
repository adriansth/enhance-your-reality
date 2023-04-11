// components 
import MainBackground from '../../components/home/MainBackground';

export default function PortfolioMain() {
     return(
          <div className='w-screen h-[40vh] pt-32 px-20'>
               {/* background */}
               <div className='absolute z-[-10]'>
                    <MainBackground />
               </div>
               {/* content */}
               <div className='flex flex-col gap-y-5'>
                    <h1 className='w-full text-7xl font-semibold text-white'>Nuestro Portafolio</h1>
               </div>
          </div>
     );
}