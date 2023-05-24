// components
import ServiceDescriptionCard from "./ServiceDescriptionCard";
// icons 
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// data 
import { services } from '../../data/services';
// assets
import meboLogo from '../../media/MEBO-LOGO.png';
import augmentedReality from '../../media/augmented-reality.webp';
// next 
import Image from 'next/image'; 
import Link from 'next/link';

export default function ServicesShowcase() {
     return(
          <div className='w-screen px-10 md:px-20 py-20 flex flex-col gap-y-5'>
               <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl text-justify'>
                    En Qüu [EYR] creemos que la tecnología puede ser una herramienta poderosa para <span className='text-violet-900 font-semibold'>ayudar a las empresas a crecer y alcanzar su máximo potencial</span>, es por esto por lo que brindamos un servicio con un enfoque colaborativo centrado en las necesidades del cliente y de esta manera proporcionamos <span className='font-semibold text-violet-900'>soluciones de tecnología personalizada que se ajusten a sus requerimientos específicos</span>.
               </p>
               <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl text-justify pb-10'>
                    Valoramos la honestidad y transparencia en todo momento, nos aseguramos de <span className='font-semibold text-violet-900'>mantener una comunicación clara y abierta con nuestros clientes</span> para garantizar que cada proyecto sea una experiencia libre de problemas y contratiempos para que todos disfrutemos de la aventura al estar completamente satisfecho con el resultado final.
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
                    <h2 className='text-lg md:text-2xl font-semibold pt-10 w-full'>Servicios especializados</h2>
                    {/* ticketing service */}
                    <Link href='/services/ticketing' className='w-full items-center border rounded-lg shadow-lg hover:scale-105 hover:bg-slate-100 transition-all relative cursor-pointer'>
                         <div className='flex gap-y-3'>
                              <div className='w-[70%] flex flex-col gap-y-5 justify-center px-10'>
                                   <div className='flex justify-start gap-x-5'>
                                        <h3 className='text-lg md:text-2xl font-semibold'>Software de control de entrada [boletera electrónica]</h3>
                                        <ChevronRightIcon className='w-5' />
                                   </div>
                                   <p className='font-light text-gray-500 text-xs md:text-sm text-justify pb-5'>
                                        Nuestro software de boletera Meta Box Office [MeBO] es un hub que permite crear boleteras personalizadas proporcionando a los artistas, productores y organizadores de cualquier tipo de eventos las facilidades para gestionar y publicar todos sus eventos, recibir pagos, controlar lista de invitados y generar sistemas de cashless, entre otras soluciones.
                                   </p>
                              </div>
                              <div className='flex justify-center w-[30%]'>
                                   <Image src={meboLogo} className='w-full h-[200px] object-cover' />
                              </div>
                         </div>
                    </Link>
                    {/* ticketing service */}
                    <div className='w-full items-center border rounded-lg shadow-lg hover:scale-105 hover:bg-slate-100 transition-all relative cursor-pointer'>
                         <div className='flex gap-y-3'>
                              <div className='w-[70%] flex flex-col gap-y-5 justify-center px-10'>
                                   <div className='flex justify-start gap-x-5'>
                                        <h3 className='text-lg md:text-2xl font-semibold'>Realidad aumentada</h3>
                                        <ChevronRightIcon className='w-5' />
                                   </div>
                                   <p className='font-light text-gray-500 text-xs md:text-sm text-justify pb-5'>
                                        Nuestros servicios de desarrollo de realidad aumentada ofrecen soluciones innovadoras y personalizadas para empresas u organizaciones que buscan crear experiencias únicas e innovadoras al incorporar tecnologías de vanguardia para crear aplicaciones que permitan integrar elementos digitales en el mundo real enriqueciendo así la interacción de los usuarios con su entorno.
                                   </p>
                              </div>
                              <div className='flex justify-center w-[30%]'>
                                   <Image src={augmentedReality} className='w-full h-[200px] object-cover rounded-r-lg' />
                              </div>
                         </div>
                         <div className='w-full relative'>
                              <span className='absolute bottom-0 bg-orange-500 font-semibold sm:text-sm text-xs text-white w-full text-center py-1 rounded-b-lg'>Próximamente</span>
                         </div>
                    </div>
               </div>
          </div>
     );
}