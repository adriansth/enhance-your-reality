// next
import Link from 'next/link';
// icons
import { ChevronRightIcon } from '@heroicons/react/24/solid'; 

export default function IdentityText() {
   return(
      <div className='w-screen px-10 md:px-20 py-20 flex flex-col gap-y-5'>
         <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl'>
            <span className='text-violet-900 font-semibold'>La imagen corporativa es un elemento clave en el éxito de una empresa</span>, esta puede atraer la atención de clientes potenciales, reforzar la confianza en los clientes actuales y ayuda a posicionar de manera concreta a sus productos o servicios en el mercado.
         </p>
         <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl'>
            Es por esto por lo que Qüu [EYR] se toma muy seriamente el <span className='text-violet-900 font-semibold'>lograr una buena identidad corporativa y definir una estrategia de comunicación clara y coherente</span>; para esto nuestros servicios incluyen: 
         </p>
         <ul className='text-violet-900 font-semibold text-xl list-disc pl-10 md:pl-20'>
            <li>Conceptualización de marca</li>
            <li>Diseño y creación de logotipos</li>
            <li>Construcción de manuales de identidad corporativa</li>
            <li>Generación de estrategias de comunicación</li>
            <li>Sistema de posicionamiento de marca y leads en redes sociales [véase en la pestaña de <Link href='/services/marketing' className='hover:underline text-blue-400'>marketing digital</Link>]</li>
         </ul>
         <p className='sm:px-10 font-semibold text-violet-900 text-sm sm:text-xl'>
            No esperes más y deja que nuestro equipo de expertos en marketing y diseño gráfico te ayuden a generar una marca atractiva e impactante. 
         </p>
         <Link href='/contact' className='transition-colors rounded-lg w-[180px] text-sm md:text-lg bg-rose-500 px-10 py-5 font-bold text-white flex items-center justify-between gap-x-2 hover:bg-sky-300 shadow-lg sm:mx-10 my-10'>
            <span>Contacta</span>
            <ChevronRightIcon className='w-3 sm:w-5' />
         </Link>
      </div>
   );
}