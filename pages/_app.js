import '../styles/globals.css'
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../redux/index';
// hooks 
import { useState, useEffect } from 'react'; 
// components 
import LoadingScreen from '../components/global/LoadingScreen';
// next 
import { useRouter } from 'next/router';

// create store
const store = createStore(
  reducer,
  composeWithDevTools(),
);

function MyApp({ Component, pageProps }) {

  const [ isLoading, setIsLoading ] = useState(false);
  const router = useRouter();

  // handle loading screen
  useEffect(() => {
    let isMounted = true;
    // end loading when all components are rendered
    const handleStart = () => {
      setIsLoading(true);
      isMounted = true;
    }
    const handleComplete = () => {
      requestAnimationFrame(() => {
        isMounted && setIsLoading(false);
      });
    }
    const handleError = () => {
      requestAnimationFrame(() => {
        isMounted && setIsLoading(false); 
      });
    }
    // router events 
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);
    // end loading when all data fetches are done
    Promise?.allSettled(pageProps?.promises || [])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
    // return finished router events
    return () => {
      isMounted = false;
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    }
  }, [router.events, Component, pageProps?.promises]);

  return (
    <Provider store={store}>
      {
        isLoading ? <LoadingScreen /> :
        <Component {...pageProps} />
      }
    </Provider>
  )
}

export default MyApp
