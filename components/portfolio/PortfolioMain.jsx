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
               <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
                    <h1 className='text-7xl font-semibold text-white pb-10'>Nuestro Portafolio</h1>
               </div>
          </div>
     );
}