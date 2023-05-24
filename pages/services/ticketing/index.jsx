// next 
import Head from 'next/head';
// components
import Navbar from '../../../components/global/Navbar';
import NavbarDynamic from '../../../components/global/NavbarDynamic';
import TicketingMain from '../../../components/services/ticketing/TicketingMain';
import Footer from '../../../components/global/Footer';
import Copyright from '../../../components/global/Copyright';

export default function TicketingPage() {
   return(
      <>
         <Head>
            <title>Boletera electrónica | Enhance Your Reality | Qüu</title>
            <meta name='description' content='Servicios de marketing digital |   Enhance Your Reality | Qüu' />
            <link rel="icon" href="/favicon.ico" />
         </Head> 
         <main>
            <div className='relative'>
               <div className='absolute'>
                  <Navbar />
                  <NavbarDynamic />
               </div>
            </div>
            <TicketingMain />
         </main>
         <footer>
            <Footer />
            <Copyright />
         </footer>
      </>
   );
}