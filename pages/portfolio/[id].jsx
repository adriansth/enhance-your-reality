// next 
import Head from 'next/head';
import { useRouter } from 'next/router';
// components 
import Navbar from '../../components/global/Navbar';
import ClientDescriptionMain from '../../components/portfolio/ClientDescriptionMain';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';
// data 
import { clients } from '../../data/clients';
import ClientDescriptionInfo from '../../components/portfolio/ClientDescriptionInfo';

export default function ClientDescriptionPage() {

     const router = useRouter();
     const { id } = router.query; // extract id from url

     // get client
     const client = clients.filter((item) => item.id == id)[0];

     return(
          <>
               <Head>
                    <title>{client.name} | Enhance Your Reality | Qü</title>
                    <meta name='description' content='Enhance Your Reality | Qü' />
                    <link rel="stylesheet" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                         </div>
                    </div>
                    <ClientDescriptionMain name={client.name} description={client.description} />
                    <ClientDescriptionInfo name={client.name} date={client.date} images={client.content.images} title={client.content.title} description={client.content.description} social={client.content.socialMedia} url={client.url} />
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
}