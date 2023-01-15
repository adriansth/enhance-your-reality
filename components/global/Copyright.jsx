// nextjs
import Link from 'next/link';

export default function Copyright() {
     return(
          <div className='bg-gray-600 py-5 px-10 w-screen flex items-center justify-center'>
               <span className='text-gray-300 text-xs md:text-sm font-light text-center'>
                    © 2023 Enhance Your Reality | Qü, Todos los derechos reservados. <Link href='/privacy-policy' className='hover:underline text-sky-300' target='__blank'>Política de Privacidad</Link>
               </span>
          </div>
     );
}