// nextjs
import Link from 'next/link';
import Image from 'next/image';
// media 
import facebook from '../../media/footer-facebook.svg';
import instagram from '../../media/footer-instagram.svg';
import linkedin from '../../media/footer-linkedin.svg';
import twitter from '../../media/footer-twitter.svg';
import logo from '../../media/white-logo-horizontal.png';

export default function Footer() {
     return(
          <div className='w-screen bg-slate-800 flex justify-center items-center p-10 md:p-20'>
               <div className='w-[70%] md:w-[30%] flex flex-col gap-y-5'>
                    {/* logo */}
                    <div className='flex justify-center items-center'>
                         <Link href='/'>
                              <Image src={logo} />
                         </Link>
                    </div>
                    {/* navs */}
                    <div className='flex flex-col md:flex-row items-center gap-y-2 justify-around gap-x-10 font-bold text-md text-white'>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/'>Home</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/about'>Nosotros</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/services'>Soluciones</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/portfolio'>Portafolio</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/blog'>Blog</Link>
                         </span>
                         <span className='cursor-pointer hover:text-sky-300 transition-colors'>
                              <Link href='/contact'>Contacto</Link>
                         </span>
                    </div>
                    {/* divider */}
                    <div className='bg-gray-500 w-full h-1'></div>
                    {/* icons */}
                    <div className='flex justify-center gap-x-5'>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Link href='https://www.facebook.com/enhanceyoureality' target='_blank'>
                                   <Image src={facebook} className='w-full'></Image>
                              </Link>
                         </div>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Link href='https://www.instagram.com/enhanceyoureality' target='_blank'>
                                   <Image src={instagram} className='w-full'></Image>
                              </Link>
                         </div>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Link href='https://linkedin.com/company/enhance-your-reality-%C2%A0q%C3%BCu' target='_blank'>
                                   <Image src={linkedin} className='w-full'></Image>
                              </Link>
                         </div>
                         <div className='hover:opacity-50 cursor-pointer w-8'>
                              <Link href='https://twitter.com/enhanceureality' target='_blank'>
                                   <Image src={twitter} className='w-full'></Image>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}