// next 
import Head from 'next/head';
// components
import Navbar from '../../../components/global/Navbar';
import NavbarDynamic from '../../../components/global/NavbarDynamic';
import IdentityMain from '../../../components/services/identity/IdentityMain';
import IdentityDescription from '../../../components/services/identity/IdentityDescription';
import IdentityWidgets from '../../../components/services/identity/IdentityWidgets';
import IdentityText from '../../../components/services/identity/IdentityText';
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
                    <IdentityMain />
                    <IdentityDescription />
                    <IdentityWidgets />
                    <IdentityText />
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
}