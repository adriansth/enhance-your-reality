// next 
import Head from 'next/head';
// components 
import Navbar from '../../../components/global/Navbar';
import NavbarDynamic from '../../../components/global/NavbarDynamic';
import AppsMain from '../../../components/services/apps/AppsMain';
import AppsShowcase from '../../../components/services/apps/AppsShowcase';
import Footer from '../../../components/global/Footer';
import Copyright from '../../../components/global/Copyright';

export default function AppsPage() {
   return(
     <>
      <Head>
         <title>Apps | Enhance Your Reality | Qüu</title>
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
         <AppsMain />
         <AppsShowcase />
      </main>
      <footer>
         <Footer />
         <Copyright />
      </footer>
     </> 
   );
}