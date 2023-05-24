// next 
import Head from 'next/head';
// components
import Navbar from '../../../components/global/Navbar';
import NavbarDynamic from '../../../components/global/NavbarDynamic';
import WebDevelopmentMain from '../../../components/services/web-development/WebDevelopmentMain';
import WebDevelopmentShowcase from '../../../components/services/web-development/WebDevelopmentShowcase';
import Footer from '../../../components/global/Footer';
import Copyright from '../../../components/global/Copyright';

export default function WebDevelopmentPage() {
     return(
          <>
               <Head>
                    <title>Desarrollo Web | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Servicios de desarrollo web | Enhance Your Reality | Qüu' />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                              <NavbarDynamic />
                         </div>
                    </div>
                    <WebDevelopmentMain />
                    <WebDevelopmentShowcase />
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
}