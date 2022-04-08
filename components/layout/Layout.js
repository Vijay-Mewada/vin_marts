import { TurnedIn } from '@mui/icons-material'
import { useRouter } from 'next/router'
import React from 'react'
import Category from '../category/Category'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import SubFooter from '../subfooter/SubFooter'
import SubNavigation from '../subnavigation/SubNavigation'

const Layout = ({children}) => {
  const router = useRouter();
  const showComponent = router.pathname === '/Login' || router.pathname === '/Register' ? false : true;
  // const showComponent = router.pathname === '/Login' ? false : true;
  return (
    <div>
        {showComponent && <Header />}
        {/* <Navigation />
        <SubNavigation /> */}
        {showComponent && <Category />}
        {children}
        {showComponent && <Footer />}
        {showComponent && <SubFooter/>}
        
    </div>
  )
}

export default Layout