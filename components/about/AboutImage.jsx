// nextjs
import Image from 'next/image';
// media
import aboutImg from '../../media/about-second.jpg';

export default function AboutImage() {
     return(
          <div className='w-screen h-[60vh]'>
               <Image src={aboutImg} className='w-full h-full object-cover' />
          </div>
     );
}