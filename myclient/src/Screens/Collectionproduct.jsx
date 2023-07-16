import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import Roughproduct from '../components/Homescreen/Roughproduct'
import Subcription from '../components/Homescreen/Subcription'

const Collectionproduct = () => {
  return (
    <>
      <PageBanner name="Collection Products" />
      <Roughproduct heading="Collections"/>
      <Roughproduct heading="More collections"/>
      <Subcription />
    </>
  )
}

export default Collectionproduct
