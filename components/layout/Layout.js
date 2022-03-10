import React from 'react'
import Category from '../category/Category'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import SubFooter from '../subfooter/SubFooter'
import SubNavigation from '../subnavigation/SubNavigation'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        {/* <Navigation />
        <SubNavigation /> */}
        <Category />
        {children}
        <Footer />
        <SubFooter/>
        
    </div>
  )
}

export default Layout