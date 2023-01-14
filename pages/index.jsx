import Head from 'next/head';
// components
import Navbar from '../components/global/Navbar';
import Main from '../components/home/Main';
import Services from '../components/home/Services';
import Footer from '../components/global/Footer';
import Copyright from '../components/global/Copyright';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Enhance Your Reality | Qü</title>
        <meta name="description" content="Enhance Your Reality | Qü" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='relative'>
          <div className='absolute'>
            <Navbar />
          </div>
          <Main />
        </div>
        <Services />
      </main>
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </div>
  )
}
