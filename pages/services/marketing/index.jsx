// next 
import Head from 'next/head';
// components
import Navbar from '../../../components/global/Navbar';
import NavbarDynamic from '../../../components/global/NavbarDynamic';
import MarketingMain from '../../../components/services/marketing/MarketingMain';
import MarketingDescription from '../../../components/services/marketing/MarketingDescription';
import Footer from '../../../components/global/Footer';
import Copyright from '../../../components/global/Copyright';

export default function MarketingPage() {
     return(
          <>
               <Head>
                    <title>Marketing Digital | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Servicios de marketing digital | Enhance Your Reality | Qüu' />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                              <NavbarDynamic />
                         </div>
                    </div>
                    <MarketingMain />
                    <MarketingDescription />
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
}