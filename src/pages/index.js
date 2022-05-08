import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <div>
      <Layout>
      <h1>Hello.</h1>
      <h2>My name is Chris and I am a developer in training</h2>
      <p>Need a dev? <Link to='/contact'>Contact me</Link></p>
      <p>Find out some more about me: <Link to='/about'>About me</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage