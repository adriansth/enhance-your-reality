// nextjs
import Head from 'next/head';
// components
import Navbar from '../../components/global/Navbar';
import AboutMain from '../../components/about/AboutMain';
import AboutWidgets from '../../components/about/AboutWidgets';

export default function About() {
     return(
          <div>
               <Head>
                    <title>Nosotros | Enhance Your Reality | Qü</title>
                    <meta name='description' content='Enhance Your Reality | Qü' />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                         </div>     
                         <AboutMain />
                    </div>
                    <AboutWidgets />
               </main>
          </div>
     );
}