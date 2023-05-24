// next
import Image from 'next/image';
// assets 
import brandConcept from '../../../media/brand-concept.webp';
import graphicCoherence from '../../../media/graphic-coherence.webp';
import visibility from '../../../media/visibility.webp';
import brandStrategy from '../../../media/brand-strategy.webp';

export default function IdentityWidgets() {
   return(
      <div className='w-screen flex flex-col'>
         {/* row 1 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-violet-500'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">CONCEPTO DE MARCA</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className="text-gray-500 font-light text-lg xl:text-md">
                  Una buena imagen corporativa profesional y coherente ayuda a transmitir una imagen de seriedad y confianza a todos sus clientes.
               </p>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={brandConcept} className='object-cover w-full h-full'></Image>
            </div>
         </div>
         {/* row 2 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-red-500'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">COHERENCIA GRÁFICA</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={graphicCoherence} className='object-cover w-full h-full'></Image>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className='text-gray-500 font-light text-lg xl:text-md'>
                  Una línea gráfica corporativa coherente y consistente ayuda a incrementar la visibilidad de la empresa, así como sus productos y servicios.
               </p>
            </div>
         </div>
         {/* row 3 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-sky-400'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">VISIBILIDAD</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className='text-gray-500 font-light text-lg xl:text-md'>
               Una buena identidad empresarial permite que la empresa destaque y se diferencie de la competencia.
               </p>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={visibility} className='w-full h-full object-cover'></Image>
            </div>
         </div>
         {/* row 4 */}
         <div className='w-full md:h-[50vh] flex flex-col md:flex-row'>
            {/* widget 1 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-red-500'>
               <h2 className="text-white font-bold text-2xl xl:text-6xl text-center">ESTRATEGIA DE MARCA</h2>
            </div>
            {/* widget 2 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center'>
               <Image src={brandStrategy} className='object-cover w-full h-full'></Image>
            </div>
            {/* widget 3 */}
            <div className='w-full md:w-[33.3vw] h-full flex items-center justify-center p-10 sm:p-20 md:p-10 xl:p-20 bg-slate-100'>
               <p className='text-gray-500 font-light text-lg xl:text-md'>
                  Una estrategia de comunicación debe considerar que la imagen corporativa estará presente en todos los canales de comunicación de la empresa: página web, redes sociales y material gráfico o promocional.
               </p>
            </div>
         </div>
      </div>
   );
}