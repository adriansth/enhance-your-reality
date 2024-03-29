// next
import Head from 'next/head';
// components 
import Navbar from '../../../components/global/Navbar';
import Footer from '../../../components/global/Footer';
import Copyright from '../../../components/global/Copyright';

export default function CustomPage() {
   return(
      <>
         <Head>
            <title>Servicios Especializados | Enhance Your Reality Qüu</title>
            <meta name='description' content='Servicios de desarrollo web | Enhance Your Reality | Qüu' />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <div className='relative'>
               <div className='absolute'>
                  <Navbar />
               </div>
            </div>
         </main>
         <footer>
            <Footer />
            <Copyright />
         </footer>
      </>
   );
}