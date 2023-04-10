// next 
import Head from 'next/head';
// components
import Navbar from '../../../components/global/Navbar';
import NavbarDynamic from '../../../components/global/NavbarDynamic';
import Footer from '../../../components/global/Footer';
import Copyright from '../../../components/global/Copyright';

export default function IdentityPage() {
     return(
          <>
               <Head>
                    <title>Identidad de Marca | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Servicios de identidad de marca | Enhance Your Reality | Qüu' />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                              <NavbarDynamic />
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