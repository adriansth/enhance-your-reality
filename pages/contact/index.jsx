// next 
import Head from 'next/head';
// components
import Navbar from '../../components/global/Navbar';
import NavbarDynamic from '../../components/global/NavbarDynamic';
import ContactMain from '../../components/contact/ContactMain';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';
import ContactForm from '../../components/contact/ContactForm';

export default function ContactPage() {
     return(
          <>
               <Head>
                    <title>Contacto | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Enhance Your Reality | Qüu' />
                    <link rel="stylesheet" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                              <NavbarDynamic />
                         </div>
                    </div>
                    <ContactMain />
                    <ContactForm />
                    <footer>
                         <Footer />
                         <Copyright />
                    </footer>
               </main>
          </>
     );
}