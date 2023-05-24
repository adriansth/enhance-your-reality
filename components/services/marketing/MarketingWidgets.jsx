// next
import Image from 'next/image';
// assets
import newHorizons from '../../../media/new-horizons.webp';
import rightAudience from '../../../media/right-audience.webp';
import clearTactics from '../../../media/clear-tactics.webp';
import pureCreativity from '../../../media/pure-creativity.webp';

export default function MarketingWidgets() {
   return(
      <div className='w-screen flex flex-col'>
         {/* row 1 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-violet-500'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">NUEVOS HORIZONTES</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className="text-gray-500 font-light text-lg xl:text-md">
               Llega a audiencias internacionales, sin importar tu ubicación geográfica, expande tu alcance y atrae nuevos clientes potenciales de todos los rincones del mundo.
               </p>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={newHorizons} className='object-cover w-full h-full'></Image>
            </div>
         </div>
         {/* row 2 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-red-500'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">AUDIENCIA INDICADA</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={rightAudience} className='object-cover w-full h-full'></Image>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className='text-gray-500 font-light text-lg xl:text-md'>
               Aumenta tus ventas a través de estrategias de publicidad efectivas y un mejor posicionamiento en el mercado. Interactúa con tus clientes de manera más directa y personalizada, lo que te permitirá conocer mejor sus necesidades y ofrecerles soluciones más efectivas.
               </p>
            </div>
         </div>
         {/* row 3 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-violet-500'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">TÁCTICAS CLARAS</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className="text-gray-500 font-light text-lg xl:text-md">
                  Una buena estrategia de marketing digital permite a las empresas segmentar su audiencia de manera más precisa y efectiva, lo que permitirá ofrecer contenido y ofertas específicas a grupos de clientes determinados.
               </p>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={clearTactics} className='object-cover w-full h-full'></Image>
            </div>
         </div>
         {/* row 4 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-red-500'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">CREATIVIDAD PURA</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={pureCreativity} className='object-cover w-full h-full'></Image>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className='text-gray-500 font-light text-lg xl:text-md'>
                  Incrementa la visibilidad de tu empresa, así como la de los productos y servicios que ofreces a través de contenidos visualmente atractivos e impactantes.
               </p>
            </div>
         </div>
      </div>
   );
}