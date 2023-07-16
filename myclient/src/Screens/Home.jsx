import React from 'react'
import Banner from '../components/Homescreen/Banner'
import Collection from '../components/Homescreen/Collection'
// import Product from '../components/Homescreen/Product'
import Promotion from '../components/Homescreen/Promotion'
// import Featuredproducts from '../components/Homescreen/Featuredproducts'
import Socialgallery from '../components/Homescreen/Socialgallery'
import Subcription from '../components/Homescreen/Subcription'
import Roughproduct from '../components/Homescreen/Roughproduct'





const Home = () => {
  return (
    <>
      <Banner/> 
      <Collection/>
      <Roughproduct heading="Top Products"/>
      {/* <Product /> */}
      <Promotion/>
      <Roughproduct heading="Featuring Products"/>
      {/* <Featuredproducts /> */}
      <Socialgallery />
      <Subcription />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className='fw-bold' style={{fontSize: '1.8rem'}}>From Our Blog</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
