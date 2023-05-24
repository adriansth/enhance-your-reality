// next 
import Image from 'next/image';
// assets 
import mebo from '../../../media/mebo.webp';

export default function TicketingMain() {
   return(
      <div className='w-screen h-[100vh]'>
         <Image src={mebo} alt="Meta Box Office" className='w-full h-full object-cover' />
      </div>
   );
}