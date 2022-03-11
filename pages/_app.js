import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps}>
      
    </Component>
  </Layout>
}

export default MyApp
