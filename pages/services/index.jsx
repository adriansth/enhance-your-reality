// next 
import Head from 'next/head';
// components 
import Navbar from '../../components/global/Navbar';
import ServicesMain from '../../components/services/ServicesMain';
import ServicesShowcase from '../../components/services/ServicesShowcase';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';

export default function ServicesPage() {
     return(
          <>
               <Head>
                    <title>Servicios | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Servicios | Enhance Your Reality | Qüu' />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                         </div>
                         <ServicesMain />
                    </div>
                    <ServicesShowcase />
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
} 