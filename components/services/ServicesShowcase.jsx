// components
import ServiceDescriptionCard from "./ServiceDescriptionCard";
// icons 
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// data 
import { services } from '../../data/services'; 
// next 
import Link from 'next/link';

export default function ServicesShowcase() {
     return(
          <div className='w-screen px-10 md:px-20 py-20 flex flex-col gap-y-5'>
               <h2 className='text-2xl sm:text-4xl font-semibold w-full sm:px-10 pb-5'>Nuestras soluciones</h2>
               <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl text-justify'>
                    En Qüu [EYR] creemos que la tecnología puede ser una herramienta poderosa para <span className='text-violet-900 font-semibold'>ayudar a las empresas a crecer y alcanzar su máximo potencial</span>, es por esto por lo que brindamos un servicio con un enfoque colaborativo centrado en las necesidades del cliente y de esta manera proporcionamos <span className='font-semibold text-violet-900'>soluciones de tecnología personalizada que se ajusten a sus requerimientos específicos</span>.
               </p>
               <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl text-justify pb-10'>
                    Valoramos la honestidad y transparencia en todo momento, nos aseguramos de <span className='font-semibold text-violet-900'>mantener una comunicación clara y abierta con nuestros clientes</span> para garantizar que cada proyecto sea una experiencia sin problemas y que todos disfrutemos de la aventura al estar completamente satisfecho con el resultado final.
               </p>
               <div className='w-full flex flex-col gap-y-5 items-center'>
                    {/* services card */}
                    <div className='w-[90%] flex flex-col mt-5 lg:mt-0 gap-y-10 lg:flex-row justify-center gap-x-5 pb-5'>
                         {
                              services.map((service) => (
                                   <ServiceDescriptionCard key={service.id} name={service.name} description={service.description} available={service.available} image={service.img} link={service.link} />
                              ))
                         }
                    </div>
                    {/* additional services */}
                    <div className='w-[90%] items-center border rounded-lg shadow-lg py-5 px-5 hover:scale-105 hover:bg-slate-100 transition-all relative'>
                         <div className='flex flex-col gap-y-3'>
                              <div className='flex justify-between'>
                                   <h3 className='text-lg md:text-2xl font-semibold'>Servicios Especializados</h3>
                                   <ChevronRightIcon className='w-5' />
                              </div>
                              <p className='font-light text-gray-500 text-xs md:text-sm text-justify pb-5'>
                                   Contamos con servicios especializados de boletera para tus eventos e inteligencia artificial.
                              </p>
                         </div>
                         <div className='bg-orange-500 w-full py-1 text-white text-xs font-semibold absolute bottom-0 left-0 rounded-b-lg flex justify-center'>
                              <span>Próximamente</span>
                         </div>
                    </div>
               </div>
          </div>
     );
}