import React from 'react'
import Blogcard from '../components/Blog/Blogcard';
import PageBanner from '../components/PageBanner/PageBanner';
import Subcription from '../components/Homescreen/Subcription';

const Blog = () => {
  return (
    <>
      <PageBanner name='Blog Page'/>
      <Blogcard />
      <Subcription />
    </>
  )
}

export default Blog
