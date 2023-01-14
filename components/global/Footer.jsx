// nextjs
import Link from 'next/link';
import Image from 'next/image';
// media 
import facebook from '../../media/footer-facebook.svg';
import instagram from '../../media/footer-instagram.svg';
import linkedin from '../../media/footer-linkedin.svg';
import twitter from '../../media/footer-twitter.svg';

export default function Footer() {
     return(
          <div className='w-screen bg-slate-800 flex justify-center items-center p-10 md:p-20'>
               <div className='w-[70%] md:w-[30%] flex flex-col gap-y-5'>
                    {/* logo */}
                    <div className='flex justify-center items-center'>
                         <span className='text-2xl xl:text-4xl font-bold text-white hover:text-sky-300 cursor-pointer text-center'>Enhance Your Reality | Qü</span>
                    </div>
                    {/* navs */}
                    <div className='flex flex-col md:flex-row items-center gap-y-2 justify-around gap-x-10 font-bold text-md text-white'>
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/'>Home</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/about'>Nosotros</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/'>Servicios</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300'>
                              <Link href='/'>Portafolio</Link>
                         </span>
                    </div>
                    {/* divider */}
                    <div className='bg-gray-500 w-full h-1'></div>
                    {/* icons */}
                    <div className='flex justify-center gap-x-5'>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Image src={facebook} className='w-full'></Image>
                         </div>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Image src={instagram} className='w-full'></Image>
                         </div>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Image src={linkedin} className='w-full'></Image>
                         </div>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Image src={twitter} className='w-full'></Image>
                         </div>
                    </div>
               </div>
          </div>
     );
}